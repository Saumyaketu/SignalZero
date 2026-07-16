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
  setCurrentNode: (node: NetworkNode) => void;
  setConnected: (value: boolean) => void;
  setNodes: (nodes: NetworkNode[]) => void;
}

export const useNetworkStore = create<NetworkStore>((set) => ({
  connected: false,
  nodes: [],
  currentNode: null,
  setCurrentNode: (node) =>
    set({
      currentNode: node,
    }),
  setConnected: (value) =>
    set({
      connected: value,
    }),

  setNodes: (nodes) =>
    set({
      nodes,
    }),
}));
