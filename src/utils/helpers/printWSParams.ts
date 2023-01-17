import { IncomingMessage } from 'http';

export const printWSParams = (socket: IncomingMessage): void => {
	console.log('\x1b[37m', '\nWebsocket parameters 🛠️\n');
	console.dir(socket.headers);
};
