import { WebSocketServer } from 'ws';
import { httpServer } from './src/http_server/index.js';
import { mouse } from '@nut-tree/nut-js';
import { getMousePosition } from './src/handlers/index.js';

const HTTP_PORT = 8181;
const WSS_PORT = 8182;
httpServer.listen(HTTP_PORT);

const commandHash = {
  mouse_position: getMousePosition,
  draw_circle: () => {},
  draw_square: () => {},
  draw_rectangle: () => {},
  mouse_up: () => {},
  mouse_down: () => {},
  mouse_left: () => {},
  mouse_right: () => {},
};

const commands = {
  mouse_position: 'mouse_position',
  draw_circle: 'draw_circle',
  draw_square: 'draw_square',
  draw_rectangle: 'draw_rectangle',
  mouse_up: 'mouse_up',
  mouse_down: 'mouse_down',
  mouse_left: 'mouse_left',
  mouse_right: 'mouse_right',
};

const wss = new WebSocketServer({ port: WSS_PORT, httpServer });
const sockets = [];

wss.on('connection', (ws) => {
  ws.on('message', async (data) => {
    const [command, ...coordinates] = data.toString().split(' ');

    if (command === commands.mouse_position) {
      const position = await commandHash[commands.mouse_position]();
      ws.send(position);
    }
  });

  ws.on('error', (err) => {
    if (err) {
      console.dir({ err });
      ws.send('repeat command');
    }
  });

  sockets.push(ws);
});

process.on('SIGINT', () => {
  sockets.forEach((s) => s.close());
  console.log('\x1b[33m', '\nGoodbye ✋🏻');
  process.exit(0);
});

console.log('\x1b[35m', `✨ HTTP server is running on ${HTTP_PORT} port`);
console.log('\x1b[32m', `🚀 WSS server is running on ${WSS_PORT} port`);
