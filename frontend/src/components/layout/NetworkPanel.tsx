import Panel from "../ui/Panel";
import MeshGraph from "../../features/network/components/MeshGraph";
import { useMesh } from "../../features/network/hooks/useMesh";

function NetworkPanel() {
  const { graphNodes, graphEdges } = useMesh();

  return (
    <Panel title="Mesh Network" className="h-full">
      <MeshGraph nodes={graphNodes} edges={graphEdges} />
    </Panel>
  );
}

export default NetworkPanel;
