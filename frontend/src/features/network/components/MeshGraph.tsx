import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type NodeTypes,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import type { MeshFlowNode } from "../types/network.types";
import MeshNode from "./MeshNode";
import MeshEdge from "./MeshEdge";

interface Props {
  nodes: MeshFlowNode[];
  edges: Edge[];
}

const nodeTypes: NodeTypes = {
  mesh: MeshNode,
};
const edgeTypes = {
  mesh: MeshEdge,
};

function MeshGraph({ nodes, edges }: Props) {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Background gap={30} size={1} color="#3f3f46" />

        <Controls showInteractive={false} />

        <MiniMap pannable zoomable nodeStrokeWidth={3} />
      </ReactFlow>
    </div>
  );
}

export default MeshGraph;
