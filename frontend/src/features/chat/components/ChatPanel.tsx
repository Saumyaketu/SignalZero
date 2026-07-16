import { useEffect, useRef } from "react";
import Panel from "../../../components/ui/Panel";
import { useChatStore } from "../store/chatStore";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import { socket } from "../../../lib/socket";
import { useNetworkStore } from "../../../store/networkStore";

function ChatPanel() {
  const { messages } = useChatStore();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const { currentNode, selectedNode } = useNetworkStore();
  function handleSend(content: string) {
    if (!currentNode) return;

    if (!selectedNode) {
      alert("Please select a destination node.");
      return;
    }

    if (selectedNode.nodeId === currentNode.nodeId) {
      alert("You cannot send a message to yourself.");
      return;
    }
    socket.emit("packet:send", {
      source: currentNode.nodeId,
      destination: selectedNode.nodeId,
      payload: content,
    });
  }

  return (
    <Panel title="Chat" className="h-full">
      <div className="flex h-full flex-col">
        <div className="mb-4 flex justify-between rounded-lg bg-zinc-900 p-3">
          <div>
            <p className="text-xs text-zinc-500">YOU</p>
            <p className="text-yellow-400 font-semibold">
              {currentNode?.username}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-zinc-500">TO</p>
            <p className="text-green-400 font-semibold">
              {selectedNode?.username ?? "Select"}
            </p>
          </div>
        </div>

        <div
          id="chat-scroll"
          className="flex-1 overflow-y-auto rounded-lg border border-zinc-800 bg-zinc-950 p-3 space-y-3 min-h-0"
        >
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="mt-4">
          <MessageInput onSend={handleSend} />
        </div>
      </div>
    </Panel>
  );
}

export default ChatPanel;
