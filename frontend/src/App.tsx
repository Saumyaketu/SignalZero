import DashboardLayout from "./layouts/DashboardLayout";
import { useNetwork } from "./features/network/hooks/useNetwork";
import { useChat } from "./features/chat/hooks/useChat";

function App() {
  useNetwork();
  useChat();

  return <DashboardLayout />;
}

export default App;
