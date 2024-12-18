import app from "./app";
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

const port = process.env.PORT || 3001;

const server = http.createServer(app);

const socketIOServer = new SocketIOServer(server);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

socketIOServer.on('connection', (socket) => {
  console.log('Socket connected');
  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });
});