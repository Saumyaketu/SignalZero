import type { ChatMessage } from "../types/chat.types";

interface Props {
  message: ChatMessage;
}

function MessageBubble({ message }: Props) {
  return (
    <div className="bg-zinc-800 rounded-xl p-3">
      <p className="text-blue-400 text-sm font-medium">{message.sender}</p>

      <p className="mt-1">{message.content}</p>
    </div>
  );
}

export default MessageBubble;
