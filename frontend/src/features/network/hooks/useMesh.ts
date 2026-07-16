import { useMemo } from "react";
import type { Edge } from "@xyflow/react";
import type { MeshFlowNode } from "../types/network.types";
import { useNetworkStore } from "../../../store/networkStore";
import { layoutGraph } from "../utils/layoutGraph";

export function useMesh() {
  const { nodes } = useNetworkStore();

  const graphNodes = useMemo<MeshFlowNode[]>(() => {
    return nodes.map((node) => ({
      id: node.nodeId,
      type: "mesh",
      position: {
        x: 0,
        y: 0,
      },

      data: {
        label: node.username,
        status: node.status,
        battery: 100,
        storage: 18,
        signal: 5,
      },
    }));
  }, [nodes]);

  const graphEdges = useMemo<Edge[]>(() => {
    const edges: Edge[] = [];
    const visited = new Set<string>();

    nodes.forEach((node) => {
      node.neighbors.forEach((neighborId) => {
        const key = [node.nodeId, neighborId].sort().join("-");

        if (visited.has(key)) return;
        visited.add(key);

        edges.push({
          id: key,
          source: node.nodeId,
          target: neighborId,
          animated: true,
          style: {
            stroke: "#3b82f6",
            strokeWidth: 3,
          },
        });
      });
    });

    return edges;
  }, [nodes]);

  const layoutedNodes = layoutGraph(graphNodes, graphEdges);

  return {
    graphNodes: layoutedNodes,
    graphEdges,
  };
}
