import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  type EdgeProps,
} from "@xyflow/react";

function MeshEdge({ id, sourceX, sourceY, targetX, targetY }: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: "#3b82f6",
          strokeWidth: 3,
        }}
      />

      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export default MeshEdge;
