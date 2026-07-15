import Panel from "../ui/Panel";

function NetworkPanel() {
  return (
    <Panel title="Mesh Network" className="h-full">
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-500 text-lg">Waiting for nodes to join...</p>

          <p className="text-sm text-zinc-600 mt-2">
            Open another browser tab to simulate another device.
          </p>
        </div>
      </div>
    </Panel>
  );
}

export default NetworkPanel;
