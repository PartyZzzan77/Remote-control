export const printWSParams = (socket) => {
  console.log('\x1b[37m', '\nWebsocket parameters 🛠️\n');
  console.dir(socket.headers);
};
