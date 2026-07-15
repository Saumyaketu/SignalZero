import Sidebar from "../components/layout/Sidebar";
import NetworkPanel from "../components/layout/NetworkPanel";
import ActivityPanel from "../components/layout/ActivityPanel";

function DashboardLayout() {
  return (
    <div className="h-screen bg-zinc-950 text-white flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 grid grid-cols-[1fr_340px] gap-6 p-6">
        <NetworkPanel />
        <ActivityPanel />
      </main>
    </div>
  );
}

export default DashboardLayout;
