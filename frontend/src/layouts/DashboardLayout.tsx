import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import FooterStats from "../components/layout/FooterStats";
import NetworkPanel from "../components/layout/NetworkPanel";
import ChatPanel from "../features/chat/components/ChatPanel";

function DashboardLayout() {
  return (
    <div className="h-screen bg-zinc-950 text-white flex flex-col">
      <Topbar />

      <main className="flex-1 p-6 overflow-hidden">
        <div className="grid h-full grid-cols-[260px_1fr] gap-6">
          <Sidebar />

          <div className="grid grid-rows-[1fr_180px] gap-6">
            <NetworkPanel />

            <div className="grid grid-cols-[300px_1fr] gap-6">
              <FooterStats />

              <ChatPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
