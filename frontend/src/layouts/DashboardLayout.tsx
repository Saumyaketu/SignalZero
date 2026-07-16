import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import FooterStats from "../components/layout/FooterStats";
import NetworkPanel from "../components/layout/NetworkPanel";
import ChatPanel from "../features/chat/components/ChatPanel";

function DashboardLayout() {
  return (
    <div className="h-screen overflow-hidden bg-zinc-950 text-white flex flex-col">
      <Topbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-72 shrink-0 h-full">
          <Sidebar />
        </div>

        <main className="grid min-h-0 flex-1 grid-rows-[11fr_9fr] gap-6 overflow-hidden p-6">
          <div>
            <NetworkPanel />
          </div>

          <div className="flex-1 grid min-h-0 grid-cols-[300px_1fr] gap-6 overflow-hidden">
            <FooterStats />

            <div className="min-h-0 h-full">
              <ChatPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
