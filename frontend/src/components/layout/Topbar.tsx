import Badge from "../ui/Badge";
import { useNetworkStore } from "../../store/networkStore";

function Topbar() {
  const { connected, nodes } = useNetworkStore();

  return (
    <header className="h-16 px-8 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-wide text-blue-500">
        SIGNALZERO
      </h1>

      <div className="flex gap-3">
        <Badge
          text={connected ? "Connected" : "Disconnected"}
          color={connected ? "green" : "red"}
        />

        <Badge text={`${nodes.length} Nodes`} />

        <Badge text="0 Packets" />
      </div>
    </header>
  );
}

export default Topbar;
