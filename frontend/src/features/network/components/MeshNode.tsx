import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Wifi } from "lucide-react";
import type { MeshFlowNode } from "../types/network.types";

function MeshNode({ data }: NodeProps<MeshFlowNode>) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />

      <div className="relative w-20 h-20 rounded-full bg-zinc-900 border-4 border-blue-500 flex flex-col items-center justify-center shadow-lg">
        <Wifi className="text-blue-400" size={24} />
      </div>

      <p className="text-center mt-3 text-white font-semibold">
        {data?.label ?? "Node"}
      </p>

      <p
        className={`text-center text-xs ${
          data.status === "offline" ? "text-red-400" : "text-green-400"
        }`}
      >
        {data.status ?? "Online"}
      </p>
      <Handle type="target" position={Position.Left} />

      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export default MeshNode;
