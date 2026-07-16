import { type ReactNode } from "react";
import Card from "./Card";

interface PanelProps {
  title: string;
  children: ReactNode;
  className?: string;
}

function Panel({ title, children, className }: PanelProps) {
  return (
    <Card className={`flex min-h-0 flex-col ${className || ""}`}>
      <div className="border-b border-zinc-800 px-5 py-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-5">
        {children}
      </div>
    </Card>
  );
}

export default Panel;
