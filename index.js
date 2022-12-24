import { WebSocketServer } from 'ws';
import { httpServer } from './src/http_server/index.js';
import { mouse } from '@nut-tree/nut-js';

const HTTP_PORT = 8181;
const WSS_PORT = 8182;
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WSS_PORT, httpServer });
const sockets = [];

wss.on('connection', (ws) => {
  ws.on('message', async (data) => {
    const [command, ...coordinates] = data.toString().split(' ');
  });

  ws.on('error', (err) => {
    if (err) {
      console.dir({ err });
      ws.send('Repeat command');
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
