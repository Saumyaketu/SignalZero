import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Wifi } from "lucide-react";
import type { MeshFlowNode } from "../types/network.types";
import { useNetworkStore } from "../../../store/networkStore";

function MeshNode({ data }: NodeProps<MeshFlowNode>) {
  const { nodes, selectedNode, setSelectedNode, currentNode } =
    useNetworkStore();

  const current = nodes.find((node) => node.username === data.label);
  const isSelected = selectedNode?.nodeId === current?.nodeId;
  const isCurrent = currentNode?.nodeId === current?.nodeId;

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => current && setSelectedNode(current)}
    >
      <div
        className={`absolute inset-0 rounded-full ${
          isCurrent || isSelected ? "animate-ping" : ""
        } ${isSelected ? "bg-green-500/30" : "bg-blue-500/20"}`}
      />

      <div
        className={`relative w-20 h-20 rounded-full border-4 flex flex-col items-center justify-center shadow-lg transition-all duration-300 ${
          isCurrent
            ? "border-yellow-400 bg-zinc-900"
            : isSelected
              ? "border-green-400 bg-zinc-900"
              : "border-blue-500 bg-zinc-900"
        }`}
      >
        <Wifi className="text-blue-400" size={24} />
      </div>

      <p className="mt-3 text-center font-semibold text-white">{data.label}</p>

      <p
        className={`text-center text-xs ${
          data.status === "offline" ? "text-red-400" : "text-green-400"
        }`}
      >
        {data.status}
      </p>

      {isCurrent && (
        <p className="text-center text-[10px] text-yellow-400 mt-1">YOU</p>
      )}

      <Handle
        type="target"
        position={Position.Left}
        className="w-0! h-0! border-0! bg-transparent!"
      />

      <Handle
        type="source"
        position={Position.Right}
        className="w-0! h-0! border-0! bg-transparent!"
      />
    </div>
  );
}

export default MeshNode;
