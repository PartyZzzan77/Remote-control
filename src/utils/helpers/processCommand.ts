import { WebSocket } from 'ws';
import { COMMANDS } from '../Constants/COMMANDS';
import { TCommandHash } from '../commandsHash.js';

export const processCommand = async (
	ws: WebSocket,
	command: string,
	commandList: TCommandHash,
	coordinates: string[]
): Promise<void> => {
	switch (command) {
		case COMMANDS.MOUSE_POSITION: {
			const position = await commandList[COMMANDS.MOUSE_POSITION]();
			ws.send(`${command} ${position}`);
			break;
		}
		case COMMANDS.DRAW_CIRCLE:
		case COMMANDS.DRAW_RECTANGLE:
		case COMMANDS.DRAW_SQUARE:
		case COMMANDS.MOUSE_DOWN:
		case COMMANDS.MOUSE_LEFT:
		case COMMANDS.MOUSE_RIGHT:
		case COMMANDS.MOUSE_UP: {
			commandList[command](coordinates);
			ws.send(command);
			break;
		}
		default: {
			const base64 = await commandList[COMMANDS.PRINT_SCREEN]();
			ws.send(base64);
		}
	}
};
