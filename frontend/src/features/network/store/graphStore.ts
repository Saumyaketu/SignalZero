import { create } from "zustand";

interface GraphStore {
  positions: Record<
    string,
    {
      x: number;
      y: number;
    }
  >;

  setPosition: (nodeId: string, x: number, y: number) => void;
}

export const useGraphStore = create<GraphStore>((set) => ({
  positions: {},

  setPosition: (nodeId, x, y) =>
    set((state) => ({
      positions: {
        ...state.positions,
        [nodeId]: { x, y },
      },
    })),
}));
