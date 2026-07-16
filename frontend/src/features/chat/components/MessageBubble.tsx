import type { ChatMessage } from "../types/chat.types";
import { useNetworkStore } from "../../../store/networkStore";

interface Props {
  message: ChatMessage;
}

function MessageBubble({ message }: Props) {
  const { currentNode } = useNetworkStore();

  const isMine = currentNode?.nodeId === message.sender;

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-xl px-4 py-3 ${
          isMine ? "bg-blue-600" : "bg-zinc-800"
        }`}
      >
        <p className="text-xs text-zinc-300 mb-1">{message.senderName}</p>

        <p className="text-white wrap-break-word">{message.content}</p>
      </div>
    </div>
  );
}

export default MessageBubble;
