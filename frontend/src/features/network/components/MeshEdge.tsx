import { BaseEdge, getBezierPath, type EdgeProps } from "@xyflow/react";

import { usePacketStore } from "../../packets/store/packetStore";

function MeshEdge({
  id,
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: EdgeProps) {
  const { activePackets } = usePacketStore();

  const isActive = activePackets.some((packet) => {
    const current = packet.route[packet.currentHop];
    const next = packet.route[packet.currentHop + 1];

    return current === source && next === target;
  });

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={{
        stroke: isActive ? "#22d3ee" : "#3b82f6",
        strokeWidth: isActive ? 5 : 3,
        filter: isActive ? "drop-shadow(0 0 8px #22d3ee)" : undefined,
      }}
    />
  );
}

export default MeshEdge;
