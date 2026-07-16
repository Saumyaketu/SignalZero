import { motion, AnimatePresence } from "framer-motion";
import { useGraphStore } from "../../network/store/graphStore";
import { usePacketStore } from "../store/packetStore";

function PacketOverlay() {
  const { activePackets } = usePacketStore();
  const { positions } = useGraphStore();

  return (
    <AnimatePresence>
      {activePackets.map((packet) => {
        const nodeId = packet.route[packet.currentHop];
        const position = positions[nodeId];

        if (!position) return null;

        return (
          <motion.div
            key={packet.packetId}
            className="absolute z-50"
            animate={{
              x: position.x + 38,
              y: position.y + 38,
            }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-30" />

              <div className="relative h-5 w-5 rounded-full border border-white bg-cyan-400 shadow-[0_0_25px_10px_rgba(34,211,238,0.8)]" />
            </div>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}

export default PacketOverlay;
