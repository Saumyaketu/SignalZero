import StatCard from "../ui/StatCard";
import { useNetworkStore } from "../../store/networkStore";
import { useAnalyticsStore } from "../../store/analyticsStore";

function FooterStats() {
  const { nodes } = useNetworkStore();

  const { packetsSent, packetsDelivered, averageLatency, averageHops } =
    useAnalyticsStore();

  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard title="Nodes Online" value={nodes.length} />

      <StatCard title="Packets Sent" value={packetsSent} />

      <StatCard title="Delivered" value={packetsDelivered} />

      <StatCard title="Avg Latency" value={`${averageLatency} ms`} />

      <StatCard title="Avg Hops" value={averageHops} />
    </div>
  );
}

export default FooterStats;
