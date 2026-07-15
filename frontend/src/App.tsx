import DashboardLayout from "./layouts/DashboardLayout";
import { useNetwork } from "./features/network/hooks/useNetwork";

function App() {
  useNetwork();

  return <DashboardLayout />;
}

export default App;
