import Panel from "../../../components/ui/Panel";
import { useChatStore } from "../store/chatStore";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

function ChatPanel() {
  const { messages, addMessage } = useChatStore();

  function handleSend(content: string) {
    addMessage({
      id: crypto.randomUUID(),
      sender: "Node-1",
      receiver: "Node-2",
      content,
      timestamp: Date.now(),
    });
  }

  return (
    <Panel title="Chat" className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto space-y-3">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>

        <div className="mt-4">
          <MessageInput onSend={handleSend} />
        </div>
      </div>
    </Panel>
  );
}

export default ChatPanel;
