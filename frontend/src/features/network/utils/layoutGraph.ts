import dagre from "@dagrejs/dagre";
import type { Edge } from "@xyflow/react";
import type { MeshFlowNode } from "../types/network.types";

const dagreGraph = new dagre.graphlib.Graph();

dagreGraph.setDefaultEdgeLabel(() => ({}));

const NODE_WIDTH = 120;
const NODE_HEIGHT = 120;

export function layoutGraph(
  nodes: MeshFlowNode[],
  edges: Edge[],
): MeshFlowNode[] {
  dagreGraph.setGraph({
    rankdir: "LR",
    nodesep: 80,
    ranksep: 120,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  return nodes.map((node) => {
    const position = dagreGraph.node(node.id);

    return {
      ...node,
      position: {
        x: position.x - NODE_WIDTH / 2,
        y: position.y - NODE_HEIGHT / 2,
      },
    };
  });
}
