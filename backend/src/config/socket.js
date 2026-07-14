import { Server } from "socket.io";
import registerSocketHandlers from "../socket/socketHandler.js";

export default function initializeSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
    },
  });

  registerSocketHandlers(io);
}
