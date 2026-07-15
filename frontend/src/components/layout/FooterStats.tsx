import StatCard from "../ui/StatCard";

import { useNetworkStore } from "../../store/networkStore";

function FooterStats() {
  const { nodes } = useNetworkStore();

  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard title="Nodes" value={nodes.length} />

      <StatCard title="Queue" value="0" />

      <StatCard title="Packets" value="0" />

      <StatCard title="Latency" value="0 ms" />
    </div>
  );
}

export default FooterStats;
