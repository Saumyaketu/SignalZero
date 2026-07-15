function ActivityPanel() {
  return (
    <aside className="w-96 bg-zinc-950 flex flex-col">
      <div className="p-5 border-b border-zinc-800">
        <h2 className="text-xl font-semibold">Activity</h2>
      </div>

      <div className="flex-1 p-4">
        <p className="text-zinc-500">Waiting for packets...</p>
      </div>
    </aside>
  );
}

export default ActivityPanel;
