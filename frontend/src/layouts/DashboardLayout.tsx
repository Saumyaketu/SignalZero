import Sidebar from "../components/layout/Sidebar";
import NetworkPanel from "../components/layout/NetworkPanel";
import ActivityPanel from "../components/layout/ActivityPanel";

function DashboardLayout() {
  return (
    <div className="h-screen bg-zinc-950 text-white flex overflow-hidden">
      <Sidebar />
      <NetworkPanel />
      <ActivityPanel />
    </div>
  );
}

export default DashboardLayout;
