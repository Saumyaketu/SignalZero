import { useEffect } from "react";
import { socket } from "../../../lib/socket";
import { useEmergencyStore } from "../store/emergencyStore";

export function useEmergency() {
  const { addAlert } = useEmergencyStore();

  useEffect(() => {
    socket.on("emergency:received", addAlert);

    return () => {
      socket.off("emergency:received", addAlert);
    };
  }, [addAlert]);
}
