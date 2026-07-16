import { useEffect, useRef } from "react";
import Panel from "../../../components/ui/Panel";
import { useChatStore } from "../store/chatStore";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import EmergencyPanel from "../../emergency/components/EmergencyPanel";
import { socket } from "../../../lib/socket";
import { useNetworkStore } from "../../../store/networkStore";

type ChatPanelView = "chat" | "emergency";

interface ChatPanelProps {
  activeView: ChatPanelView;
  onToggleView: (view: ChatPanelView) => void;
}

function ChatPanel({ activeView, onToggleView }: ChatPanelProps) {
  const { messages } = useChatStore();
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatRef.current) return;

    chatRef.current.scrollTop = chatRef.current.scrollHeight;
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
    <Panel
      title={activeView === "chat" ? "Chat" : "Emergency"}
      className="h-full min-h-0 overflow-hidden"
    >
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        <div className="mb-4 flex flex-wrap items-center gap-3 rounded-lg bg-zinc-900 p-3">
          <div className="flex-1 min-w-60">
            <p className="text-xs text-zinc-500">YOU</p>
            <p className="text-yellow-400 font-semibold">
              {currentNode?.username}
            </p>
          </div>

          {activeView === "chat" ? (
            <div className="text-right min-w-50">
              <p className="text-xs text-zinc-500">TO</p>
              <p className="text-green-400 font-semibold">
                {selectedNode?.username ?? "Select"}
              </p>
            </div>
          ) : (
            <div className="text-right min-w-50">
              <p className="text-xs text-zinc-500">MODE</p>
              <p className="text-red-400 font-semibold">Emergency Broadcast</p>
            </div>
          )}

          <div className="flex gap-2 rounded-xl border border-zinc-800 bg-zinc-950/80 p-2">
            <button
              type="button"
              onClick={() => onToggleView("chat")}
              className={`rounded-xl px-4 py-2 text-sm transition ${
                activeView === "chat"
                  ? "bg-blue-600 text-white"
                  : "text-zinc-300 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Chat
            </button>
            <button
              type="button"
              onClick={() => onToggleView("emergency")}
              className={`rounded-xl px-4 py-2 text-sm transition ${
                activeView === "emergency"
                  ? "bg-red-600 text-white"
                  : "text-zinc-300 hover:bg-red-600 hover:text-white"
              }`}
            >
              Emergency
            </button>
          </div>
        </div>

        {activeView === "chat" ? (
          <>
            <div
              ref={chatRef}
              id="chat-scroll"
              className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-3 space-y-3"
            >
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </div>

            <div className="mt-4 shrink-0">
              <MessageInput onSend={handleSend} />
            </div>
          </>
        ) : (
          <EmergencyPanel />
        )}
      </div>
    </Panel>
  );
}

export default ChatPanel;
