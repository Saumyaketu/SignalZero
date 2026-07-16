import { useGraphStore } from "../../network/store/graphStore";
import { usePacketStore } from "../store/packetStore";

function PacketOverlay() {
  const { activePackets } = usePacketStore();
  const { positions } = useGraphStore();

  if (activePackets.length === 0) {
    return null;
  }

  return (
    <>
      {activePackets.map((packet) => {
        const nodeId = packet.route[packet.currentHop];
        const position = positions[nodeId];

        if (!position) return null;

        return (
          <div
            key={packet.packetId}
            className="absolute z-50 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_18px_6px_rgba(34,211,238,0.8)] transition-all duration-500"
            style={{
              left: position.x + 38,
              top: position.y + 38,
            }}
          />
        );
      })}
    </>
  );
}

export default PacketOverlay;
