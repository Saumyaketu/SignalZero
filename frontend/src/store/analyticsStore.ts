import { create } from "zustand";

interface Analytics {
  packetsSent: number;
  packetsDelivered: number;
  packetsDropped: number;
  averageLatency: number;
  averageHops: number;

  setAnalytics: (data: Analytics) => void;
}

export const useAnalyticsStore = create<Analytics>((set) => ({
  packetsSent: 0,
  packetsDelivered: 0,
  packetsDropped: 0,
  averageLatency: 0,
  averageHops: 0,

  setAnalytics: (data) => set(data),
}));
