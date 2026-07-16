import { useEffect } from "react";
import { socket } from "../../../lib/socket";
import { useAnalyticsStore } from "../../../store/analyticsStore";

export function useAnalytics() {
  const { setAnalytics } = useAnalyticsStore();

  useEffect(() => {
    socket.on("analytics:update", setAnalytics);

    return () => {
      socket.off("analytics:update", setAnalytics);
    };
  }, [setAnalytics]);
}
