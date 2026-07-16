import { create } from "zustand";

export interface ActivePacket {
  packetId: string;
  route: string[];
  currentHop: number;
  payload: string;
}

interface PacketStore {
  activePackets: ActivePacket[];
  addPacket: (packet: ActivePacket) => void;
  updatePacket: (packetId: string, currentHop: number) => void;
  removePacket: (packetId: string) => void;
}

export const usePacketStore = create<PacketStore>((set) => ({
  activePackets: [],

  addPacket: (packet) =>
    set((state) => ({
      activePackets: [...state.activePackets, packet],
    })),

  updatePacket: (packetId, hop) =>
    set((state) => ({
      activePackets: state.activePackets.map((packet) =>
        packet.packetId === packetId
          ? {
              ...packet,
              currentHop: hop,
            }
          : packet,
      ),
    })),

  removePacket: (packetId) =>
    set((state) => ({
      activePackets: state.activePackets.filter(
        (packet) => packet.packetId !== packetId,
      ),
    })),
}));
