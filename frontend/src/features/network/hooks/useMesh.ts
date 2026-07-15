import { useMemo } from "react";
import type { Edge } from "@xyflow/react";
import type { MeshFlowNode } from "../types/network.types";
import { useNetworkStore } from "../../../store/networkStore";
import { layoutGraph } from "../utils/layoutGraph";

export function useMesh() {
  const { nodes } = useNetworkStore();

  const graphNodes = useMemo<MeshFlowNode[]>(() => {
    return nodes.map((node, index) => ({
      id: node.nodeId,
      type: "mesh",
      position: {
        x: 0,
        y: 0,
      },

      data: {
        label: `Node-${index + 1}`,
        status: "online",
        battery: 100,
        storage: 18,
        signal: 5,
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
        animated: true,
        style: {
          stroke: "#3b82f6",
          strokeWidth: 3,
        },
      });
    }

    return edges;
  }, [graphNodes]);

  const layoutedNodes = layoutGraph(graphNodes, graphEdges);

  return {
    graphNodes: layoutedNodes,
    graphEdges,
  };
}
