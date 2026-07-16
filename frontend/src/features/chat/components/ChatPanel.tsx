import Panel from "../../../components/ui/Panel";
import { useChatStore } from "../store/chatStore";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import { socket } from "../../../lib/socket";
import { useNetworkStore } from "../../../store/networkStore";

function ChatPanel() {
  const { messages } = useChatStore();
  const { currentNode, nodes } = useNetworkStore();

  function handleSend(content: string) {
    if (!currentNode) return;
    if (nodes.length < 2) return;

    socket.emit("packet:send", {
      source: currentNode.nodeId,
      destination: nodes.find((n) => n.nodeId !== currentNode.nodeId)?.nodeId,
      payload: content,
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
