import { Server } from "socket.io";

export default function SocketHandler(req: any, res: any) {
  if (res.socket.server.io) {
    console.log("Socket is already running");
    res.end();
    return
  }
  console.log("Socket is initializing");
    let io : Server = new Server(res.socket.server);
    res.socket.server = io;
  io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("test", (msg : string) => {
      console.log("Broadcasting Test...");
      socket.broadcast.emit("pass", msg);
    });
  });
  res.end();
}
