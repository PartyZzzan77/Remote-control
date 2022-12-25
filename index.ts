import WebSocket, { WebSocketServer } from 'ws';
import { IncomingMessage } from 'http';
import { COMMANDS } from './src/utils/Constants/COMMANDS';
import { httpServer } from './src/http_server/index.js';
import { printWSParams } from './src/utils/helpers/printWSParams.js';
import { HTTP_PORT, WSS_PORT } from './config.js';
import {
    drawCircle,
    drawRectangle,
    drawSquare,
    getMousePosition,
    moveMouseDown,
    moveMouseLeft,
    moveMouseRight,
    moveMouseUp,
    printScreen,
} from './src/handlers/index.js';

httpServer.listen(HTTP_PORT);

const commandHash = {
    mouse_position: getMousePosition,
    draw_circle: drawCircle,
    draw_square: drawSquare,
    draw_rectangle: drawRectangle,
    mouse_up: moveMouseUp,
    mouse_down: moveMouseDown,
    mouse_left: moveMouseLeft,
    mouse_right: moveMouseRight,
    prnt_scrn: printScreen,
};

const wss = new WebSocketServer({ port: WSS_PORT });
const sockets: WebSocket[] = [];

wss.on('connection', (ws: WebSocket, req: IncomingMessage) => {
    printWSParams(req);

    ws.on('message', async (data) => {
        const [command, ...coordinates] = data.toString().split(' ');
        if (command === COMMANDS.MOUSE_POSITION) {
            const position = await commandHash[COMMANDS.MOUSE_POSITION]();
            ws.send(position);
        } else if (command === COMMANDS.DRAW_CIRCLE) {
            commandHash[COMMANDS.DRAW_CIRCLE](coordinates);
            ws.send(command);
        } else if (command === COMMANDS.DRAW_RECTANGLE) {
            commandHash[COMMANDS.DRAW_RECTANGLE](coordinates);
            ws.send(command);
        } else if (command === COMMANDS.DRAW_SQUARE) {
            commandHash[COMMANDS.DRAW_SQUARE](coordinates[0]);
            ws.send(command);
        } else if (command === COMMANDS.MOUSE_DOWN) {
            commandHash[COMMANDS.MOUSE_DOWN](coordinates[0]);
            ws.send(command);
        } else if (command === COMMANDS.MOUSE_LEFT) {
            commandHash[COMMANDS.MOUSE_LEFT](coordinates[0]);
            ws.send(command);
        } else if (command === COMMANDS.MOUSE_RIGHT) {
            commandHash[COMMANDS.MOUSE_RIGHT](coordinates[0]);
            ws.send(command);
        } else if (command === COMMANDS.MOUSE_UP) {
            commandHash[COMMANDS.MOUSE_UP](coordinates[0]);
            ws.send(command);
        } else {
            const screenShot = await commandHash[COMMANDS.PRINT_SCREEN]();
            ws.send(`${command} ${screenShot}`);
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
