import networkService from "../services/network.service.js";
import messageService from "../services/message.service.js";
import { EVENTS } from "./events.js";

export default function registerSocketHandlers(io) {
  io.on(EVENTS.CONNECTION, (socket) => {
    console.log(`Node Connected : ${socket.id}`);

    const node = networkService.createNode(socket.id);

    socket.emit(EVENTS.NODE_REGISTERED, node);

    io.emit(EVENTS.NETWORK_UPDATE, networkService.getAllNodes());

    socket.on(EVENTS.DISCONNECT, () => {
      console.log(`Node Disconnected : ${socket.id}`);
      networkService.removeNode(socket.id);
      io.emit(EVENTS.NETWORK_UPDATE, networkService.getAllNodes());
    });

    socket.on(EVENTS.PACKET_SEND, (data) => {
      try {
        const { source, destination, payload } = data;
        if (!source || !destination || !payload) {
          return socket.emit(EVENTS.PACKET_ERROR, {
            message: "Invalid packet",
          });
        }
        const packet = messageService.sendMessage(source, destination, payload);

        if (!packet) {
          socket.emit(EVENTS.PACKET_ERROR, {
            message: "Route not found",
          });
          return;
        }
      } catch (error) {
        console.error(error);

        socket.emit(EVENTS.PACKET_ERROR, {
          message: "Internal Server Error",
        });
      }

      io.emit(EVENTS.PACKET_FORWARD, packet);
    });
  });
}
