
import { WebSocket } from 'ws';
import { COMMANDS } from '../Constants/COMMANDS';
import { commandHash } from '../commandsHash.js';

export const processCommand = async (ws: WebSocket, command: string, commandList: typeof commandHash, coordinates: string[],): Promise<void> => {
    if (command === COMMANDS.MOUSE_POSITION) {
        const position = await commandList[COMMANDS.MOUSE_POSITION]();
        ws.send(`${command} ${position}`);
    } else if (command === COMMANDS.DRAW_CIRCLE) {
        commandList[COMMANDS.DRAW_CIRCLE](coordinates);
        ws.send(command);
    } else if (command === COMMANDS.DRAW_RECTANGLE) {
        commandList[COMMANDS.DRAW_RECTANGLE](coordinates);
        ws.send(command);
    } else if (command === COMMANDS.DRAW_SQUARE) {
        commandList[COMMANDS.DRAW_SQUARE](coordinates[0]);
        ws.send(command);
    } else if (command === COMMANDS.MOUSE_DOWN) {
        commandList[COMMANDS.MOUSE_DOWN](coordinates[0]);
        ws.send(command);
    } else if (command === COMMANDS.MOUSE_LEFT) {
        commandList[COMMANDS.MOUSE_LEFT](coordinates[0]);
        ws.send(command);
    } else if (command === COMMANDS.MOUSE_RIGHT) {
        commandList[COMMANDS.MOUSE_RIGHT](coordinates[0]);
        ws.send(command);
    } else if (command === COMMANDS.MOUSE_UP) {
        commandList[COMMANDS.MOUSE_UP](coordinates[0]);
        ws.send(command);
    } else {
        const screenShot = await commandList[COMMANDS.PRINT_SCREEN]();
        ws.send(`${command} ${screenShot}`);
    }
};