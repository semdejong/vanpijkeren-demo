import type { ReactNode } from "react";

export type BordRow = { label: string; value: ReactNode };

export default function Bouwbord({
  rows,
  kicker = "Bouwbord",
  meta = "Ommen",
  animate = false,
  className = "",
}: {
  rows: BordRow[];
  kicker?: string;
  meta?: string;
  animate?: boolean;
  className?: string;
}) {
  return (
    <div className={`bouwbord ${animate ? "bouwbord-animate" : ""} ${className}`}>
      <div className="bouwbord-head">
        <span>{kicker}</span>
        <span>{meta}</span>
      </div>
      {rows.map((row) => (
        <div className="bb-row" key={row.label}>
          <div className="bb-label">{row.label}</div>
          <div className="bb-value">{row.value}</div>
        </div>
      ))}
    </div>
  );
}
