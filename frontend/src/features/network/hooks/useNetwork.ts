import { useEffect } from "react";
import { socket } from "../../../lib/socket";
import { useNetworkStore } from "../../../store/networkStore";

export function useNetwork() {
  const { setCurrentNode, setConnected, setNodes } = useNetworkStore();

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      setConnected(true);
    });

    socket.on("disconnect", () => {
      setConnected(false);
    });

    socket.on("node:registered", (node) => {
      setCurrentNode(node);
    });

    socket.on("network:update", (nodes) => {
      setNodes(nodes);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("node:registered");
      socket.off("network:update");
    };
  }, []);
}
