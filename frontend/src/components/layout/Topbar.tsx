import Badge from "../ui/Badge";

function Topbar() {
  return (
    <header className="h-16 px-8 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-wide text-blue-500">
          SIGNALZERO
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <Badge text="Connected" color="green" />

        <Badge text="0 Nodes" />

        <Badge text="0 Packets" />
      </div>
    </header>
  );
}

export default Topbar;
