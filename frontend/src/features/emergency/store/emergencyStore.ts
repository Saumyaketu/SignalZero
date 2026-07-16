import { create } from "zustand";
import type { EmergencyAlert } from "../types/emergency.types";

interface EmergencyState {
  alerts: EmergencyAlert[];
  addAlert: (alert: EmergencyAlert) => void;
  clearAlerts: () => void;
}

export const useEmergencyStore = create<EmergencyState>((set) => ({
  alerts: [],

  addAlert: (alert) =>
    set((state) => ({
      alerts: [alert, ...state.alerts],
    })),

  clearAlerts: () =>
    set({
      alerts: [],
    }),
}));
