import DashboardLayout from "./layouts/DashboardLayout";
import { useNetwork } from "./features/network/hooks/useNetwork";
import { useChat } from "./features/chat/hooks/useChat";
import { usePacket } from "./features/packets/hooks/usePacket";
import { useAnalytics } from "./features/analytics/hooks/useAnalytics";

function App() {
  useNetwork();
  useChat();
  usePacket();
  useAnalytics();

  return <DashboardLayout />;
}

export default App;
