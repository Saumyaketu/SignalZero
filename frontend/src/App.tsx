import DashboardLayout from "./layouts/DashboardLayout";
import { useNetwork } from "./features/network/hooks/useNetwork";
import { useChat } from "./features/chat/hooks/useChat";
import { usePacket } from "./features/packets/hooks/usePacket";

function App() {
  useNetwork();
  useChat();
  usePacket();

  return <DashboardLayout />;
}

export default App;
