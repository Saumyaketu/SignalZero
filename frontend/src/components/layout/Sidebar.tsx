import {
  LayoutDashboard,
  Network,
  MessageSquare,
  Bell,
  Siren,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Network, label: "Mesh Network" },
  { icon: MessageSquare, label: "Chat" },
  { icon: Bell, label: "Bulletin" },
  { icon: Siren, label: "Emergency" },
  { icon: Settings, label: "Settings" },
];

function Sidebar() {
  return (
    <div className="flex h-full flex-col bg-zinc-950">
      <aside className="flex min-h-0 flex-1 flex-col border-r border-zinc-800">
        <nav className="flex-1 overflow-y-auto p-4">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
            Navigation
          </p>

          <div className="space-y-2">
            {menuItems.map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-300 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Icon size={20} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </nav>
      </aside>

      <div className="shrink-0 border-t border-zinc-800 p-5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

          <span className="text-sm text-zinc-300">Connected</span>
        </div>

        <p className="text-xs text-zinc-500 mt-2">Mesh Network Active</p>
      </div>
    </div>
  );
}

export default Sidebar;
