import networkService from "../services/network.service.js";
import messageService from "../services/message.service.js";
import packetProcessor from "../services/packetProcessor.service.js";
import analyticsService from "../services/analytics.service.js";
import { EVENTS } from "./events.js";
import { delay } from "../utils/delay.js";

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

    socket.on(EVENTS.PACKET_SEND, async (data) => {
      try {
        const { source, destination, payload } = data;
        if (!source || !destination || !payload) {
          return socket.emit(EVENTS.PACKET_ERROR, {
            message: "Invalid packet",
          });
        }
        const packet = messageService.sendMessage(source, destination, payload);

        if (!packet) {
          return socket.emit(EVENTS.PACKET_ERROR, {
            message: "Route not found",
          });
        }

        analyticsService.packetSent();

        io.emit(EVENTS.ANALYTICS_UPDATE, analyticsService.getStats());

        let currentPacket = packet;

        io.emit(EVENTS.PACKET_FORWARD, currentPacket);

        while (!packetProcessor.isDelivered(currentPacket)) {
          await delay(500);

          currentPacket = packetProcessor.moveToNextHop(currentPacket);

          if (!packetProcessor.isDelivered(currentPacket)) {
            io.emit(EVENTS.PACKET_UPDATE, currentPacket);
          }
        }

        currentPacket.status = "DELIVERED";

        io.emit(EVENTS.ANALYTICS_UPDATE, analyticsService.getStats());

        const senderSocket = networkService.findSocketByNodeId(
          currentPacket.source,
        );

        const receiverSocket = networkService.findSocketByNodeId(
          currentPacket.destination,
        );

        if (senderSocket) {
          io.to(senderSocket).emit(EVENTS.PACKET_DELIVER, currentPacket);
        }

        if (receiverSocket && receiverSocket !== senderSocket) {
          io.to(receiverSocket).emit(EVENTS.PACKET_DELIVER, currentPacket);
        }
      } catch (error) {
        console.error(error);

        socket.emit(EVENTS.PACKET_ERROR, {
          message: "Internal Server Error",
        });
      }
    });

    socket.on(EVENTS.EMERGENCY_BROADCAST, (data) => {
      io.emit(EVENTS.EMERGENCY_RECEIVED, {
        id: crypto.randomUUID(),
        sender: data.sender,
        message: data.message,
        timestamp: Date.now(),
      });
    });
  });
}
