import { useEffect } from "react";
import { socket } from "../../../lib/socket";
import { useNetworkStore } from "../../../store/networkStore";
import { useChatStore } from "../store/chatStore";

function getSenderName(nodeId: string) {
  const { currentNode, nodes } = useNetworkStore.getState();

  if (currentNode?.nodeId === nodeId) {
    return currentNode.username;
  }

  return nodes.find((node) => node.nodeId === nodeId)?.username ?? nodeId;
}

export function useChat() {
  const { addMessage } = useChatStore();

  useEffect(() => {
    socket.on("packet:deliver", (packet) => {
      addMessage({
        id: packet.packetId,
        sender: packet.source,
        receiver: packet.destination,
        content: packet.payload,
        timestamp: Date.now(),
        senderName: getSenderName(packet.source),
      });
    });

    return () => {
      socket.off("packet:deliver");
    };
  }, [addMessage]);
}
