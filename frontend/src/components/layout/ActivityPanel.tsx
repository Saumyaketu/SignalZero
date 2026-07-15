import Panel from "../ui/Panel";

function ActivityPanel() {
  return (
    <Panel title="Activity" className="h-full">
      <div className="flex items-center justify-center h-full">
        <p className="text-zinc-500">No packets transmitted yet.</p>
      </div>
    </Panel>
  );
}

export default ActivityPanel;
