import type { Node } from "@xyflow/react";

export interface MeshNodeData extends Record<string, unknown> {
  label: string;
  status?: "online" | "offline";
  battery?: number;
  storage?: number;
  signal?: number;
}

export type MeshFlowNode = Node<MeshNodeData, "mesh">;
