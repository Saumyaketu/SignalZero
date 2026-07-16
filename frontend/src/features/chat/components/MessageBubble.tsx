import type { ChatMessage } from "../types/chat.types";
import { useNetworkStore } from "../../../store/networkStore";

interface Props {
  message: ChatMessage;
}

function MessageBubble({ message }: Props) {
  const { currentNode, nodes } = useNetworkStore();

  const sender =
    message.senderName ??
    (currentNode?.nodeId === message.sender
      ? currentNode.username
      : nodes.find((node) => node.nodeId === message.sender)?.username) ??
    message.sender;

  return (
    <div className="bg-zinc-800 rounded-xl p-3">
      <p className="text-blue-400 text-sm font-medium">{sender}</p>

      <p className="mt-1">{message.content}</p>
    </div>
  );
}

export default MessageBubble;
