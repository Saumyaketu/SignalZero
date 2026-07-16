import { useMemo } from "react";
import { socket } from "../../../lib/socket";
import { useEmergencyStore } from "../store/emergencyStore";
import { useNetworkStore } from "../../../store/networkStore";
import MessageInput from "../../chat/components/MessageInput";

function getSenderName(senderId: string, currentNodeId: string | null, nodes: Array<{ nodeId: string; username: string }>) {
  if (currentNodeId === senderId) {
    const current = nodes.find((node) => node.nodeId === currentNodeId);
    return current?.username ?? senderId;
  }

  return nodes.find((node) => node.nodeId === senderId)?.username ?? senderId;
}

function EmergencyPanel() {
  const { alerts, clearAlerts } = useEmergencyStore();
  const { currentNode, nodes } = useNetworkStore();

  const orderedAlerts = useMemo(
    () => [...alerts].sort((a, b) => b.timestamp - a.timestamp),
    [alerts],
  );

  function handleBroadcast(message: string) {
    if (!currentNode) return;

    socket.emit("emergency:broadcast", {
      id: `emergency-${Date.now()}`,
      sender: currentNode.nodeId,
      message,
      timestamp: Date.now(),
    });
  }

  return (
    <>
      <div className="mb-4 rounded-lg bg-zinc-900 p-3 text-sm text-zinc-300">
        <p className="font-semibold text-white">Emergency broadcast mode</p>
        <p className="mt-1 text-xs text-zinc-500">
          Send an alert to all connected nodes. Emergency messages appear in the emergency panel for every node.
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto rounded-lg border border-zinc-800 bg-zinc-950 p-3 space-y-3">
        {orderedAlerts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-700 p-6 text-center text-sm text-zinc-500">
            No emergency alerts yet.
          </div>
        ) : (
          orderedAlerts.map((alert) => (
            <div key={alert.id} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
              <div className="flex items-center justify-between gap-3 text-xs text-zinc-500">
                <span>{getSenderName(alert.sender, currentNode?.nodeId ?? null, nodes)}</span>
                <span>{new Date(alert.timestamp).toLocaleTimeString()}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-100">{alert.message}</p>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <MessageInput
          onSend={handleBroadcast}
          placeholder="Type emergency alert..."
          buttonLabel="Broadcast"
        />
        <button
          type="button"
          onClick={clearAlerts}
          className="rounded-xl bg-zinc-800 px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-700"
        >
          Clear
        </button>
      </div>
    </>
  );
}

export default EmergencyPanel;
