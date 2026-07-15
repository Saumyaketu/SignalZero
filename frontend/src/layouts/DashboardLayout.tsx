function DashboardLayout() {
  return (
    <div className="w-full h-screen flex">
      <aside className="w-72 border-r border-zinc-800 bg-zinc-950">
        Sidebar
      </aside>

      <main className="flex-1 flex items-center justify-center">Dashboard</main>
    </div>
  );
}

export default DashboardLayout;
