import { useMemo } from "react";
import type { Edge, Node } from "@xyflow/react";
import { useNetworkStore } from "../../../store/networkStore";

export function useMesh() {
  const { nodes } = useNetworkStore();

  const graphNodes = useMemo<Node[]>(() => {
    return nodes.map((node, index) => ({
      id: node.nodeId,

      position: {
        x: 150 + index * 220,
        y: 200,
      },

      data: {
        label: node.username,
      },
    }));
  }, [nodes]);

  const graphEdges = useMemo<Edge[]>(() => {
    const edges: Edge[] = [];

    for (let i = 0; i < graphNodes.length - 1; i++) {
      edges.push({
        id: `${i}`,
        source: graphNodes[i].id,
        target: graphNodes[i + 1].id,
      });
    }

    return edges;
  }, [graphNodes]);

  return {
    graphNodes,
    graphEdges,
  };
}
