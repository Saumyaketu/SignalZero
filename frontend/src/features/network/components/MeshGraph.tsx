import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Node,
  type Edge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

interface Props {
  nodes: Node[];
  edges: Edge[];
}

function MeshGraph({ nodes, edges }: Props) {
  return (
    <div className="h-full w-full rounded-xl overflow-hidden">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />

        <Controls />

        <Background />
      </ReactFlow>
    </div>
  );
}

export default MeshGraph;
