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
  setConnected: (value: boolean) => void;
  setNodes: (nodes: NetworkNode[]) => void;
}

export const useNetworkStore = create<NetworkStore>((set) => ({
  connected: false,
  nodes: [],
  setConnected: (value) =>
    set({
      connected: value,
    }),

  setNodes: (nodes) =>
    set({
      nodes,
    }),
}));
