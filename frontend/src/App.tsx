import DashboardLayout from "./layouts/DashboardLayout";
import { useNetwork } from "./features/network/hooks/useNetwork";
import { useChat } from "./features/chat/hooks/useChat";
import { usePacket } from "./features/packets/hooks/usePacket";
import { useAnalytics } from "./features/analytics/hooks/useAnalytics";
import { useEmergency } from "./features/emergency/hooks/useEmergency";

function App() {
  useNetwork();
  useChat();
  usePacket();
  useAnalytics();
  useEmergency();

  return <DashboardLayout />;
}

export default App;
