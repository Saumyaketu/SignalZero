import { useEffect } from "react";
import { socket } from "../../../lib/socket";
import { usePacketStore } from "../store/packetStore";

export function usePacket() {
  const { addPacket, updatePacket, removePacket } = usePacketStore();

  useEffect(() => {
    socket.on("packet:forward", (packet) => {
      addPacket({
        packetId: packet.packetId,
        route: packet.route,
        currentHop: packet.currentHop,
        payload: packet.payload,
      });
    });

    socket.on("packet:update", (packet) => {
      updatePacket(packet.packetId, packet.currentHop);
    });

    socket.on("packet:deliver", (packet) => {
      removePacket(packet.packetId);
    });

    return () => {
      socket.off("packet:forward");
      socket.off("packet:update");
      socket.off("packet:deliver");
    };
  }, [addPacket, updatePacket, removePacket]);
}
