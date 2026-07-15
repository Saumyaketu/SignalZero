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
    <aside className="w-72 bg-zinc-950 border-r border-zinc-800 flex flex-col">
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-blue-500">SIGNALZERO</h1>

        <p className="text-sm text-zinc-400 mt-2">Offline Mesh Communication</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-900 transition-all duration-200"
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

          <span className="text-sm text-zinc-300">Connected</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
