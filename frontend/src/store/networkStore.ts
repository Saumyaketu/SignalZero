import { create } from "zustand";

interface NetworkNode {
  nodeId: string;
  socketId: string;
  username: string;
  status: "online" | "offline";
  neighbors: string[];
}

interface NetworkStore {
  connected: boolean;
  nodes: NetworkNode[];
  currentNode: NetworkNode | null;
  selectedNode: NetworkNode | null;
  setConnected: (value: boolean) => void;
  setNodes: (nodes: NetworkNode[]) => void;
  setCurrentNode: (node: NetworkNode) => void;
  setSelectedNode: (node: NetworkNode | null) => void;
}

export const useNetworkStore = create<NetworkStore>((set) => ({
  connected: false,
  nodes: [],
  currentNode: null,
  selectedNode: null,

  setConnected: (value) =>
    set({
      connected: value,
    }),

  setNodes: (nodes) =>
    set({
      nodes,
    }),

  setCurrentNode: (node) =>
    set({
      currentNode: node,
    }),

  setSelectedNode: (node) =>
    set({
      selectedNode: node,
    }),
}));
