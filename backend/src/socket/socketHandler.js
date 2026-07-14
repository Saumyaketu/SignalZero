import networkService from "../services/network.service.js";

export default function registerSocketHandlers(io) {
  io.on("connection", (socket) => {
    console.log(`${socket.id} Connected`);

    const node = networkService.createNode(socket.id);

    socket.emit("node:registered", node);

    io.emit("network:update", networkService.getAllNodes());

    socket.on("disconnect", () => {
      console.log(`${socket.id} Disconnected`);

      networkService.removeNode(socket.id);

      io.emit("network:update", networkService.getAllNodes());
    });
  });
}
