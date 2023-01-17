import { IncomingMessage } from 'http';
import WebSocket, { WebSocketServer } from 'ws';

import { HTTP_PORT, WSS_PORT } from './config.js';
import { httpServer } from './src/http_server/index.js';
import { commandHash } from './src/utils/commandsHash.js';
import { printWSParams } from './src/utils/helpers/printWSParams.js';
import { processCommand } from './src/utils/helpers/processCommand.js';

httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WSS_PORT });

wss.on('connection', (ws: WebSocket, req: IncomingMessage) => {
    printWSParams(req);
    
    ws.on('message', async (data) => {
        const [command, ...coordinates] = data.toString().split(' ');
        processCommand(ws, command, commandHash, coordinates);
    });
});

process.on('SIGINT', () => {
    wss.clients.forEach(ws => ws.close());
    console.log('\x1b[33m', '\nGoodbye ✋🏻');

    process.exit(0);
});

console.log('\x1b[35m', `✨ HTTP server is running on ${HTTP_PORT} port`);
console.log('\x1b[32m', `🚀 WSS server is running on ${WSS_PORT} port`);
