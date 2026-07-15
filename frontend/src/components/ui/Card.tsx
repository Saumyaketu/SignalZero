import { type ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
