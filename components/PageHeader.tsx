import type { ReactNode } from "react";
import Bouwbord, { type BordRow } from "@/components/Bouwbord";

export default function PageHeader({
  blad,
  title,
  lead,
  rows,
  meta = "Van Pijkeren Bouw",
}: {
  blad: string;
  title: string;
  lead?: string;
  rows?: BordRow[];
  meta?: string;
}) {
  return (
    <header data-section="pagina-kop" className="border-b border-ink/15">
      <div className="blad mx-auto grid w-full max-w-[76rem] items-end gap-8 px-6 py-12 md:px-8 md:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]">
        <span className="mark mark-tl" aria-hidden="true" />
        <span className="mark mark-tr" aria-hidden="true" />
        <span className="mark mark-bl" aria-hidden="true" />
        <span className="mark mark-br" aria-hidden="true" />
        <div>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">{blad}</p>
          <h1 className="mt-3 max-w-4xl text-[clamp(2.6rem,6vw,4.6rem)] text-ink">{title}</h1>
          {lead ? <p className="mt-5 max-w-2xl text-lg leading-relaxed">{lead}</p> : null}
        </div>
        {rows ? <Bouwbord kicker="Tekeningkop" meta={meta} rows={rows} /> : <StampSlot />}
      </div>
    </header>
  );
}

function StampSlot(): ReactNode {
  return (
    <div className="stempel" aria-hidden="true">
      <span>Sinds</span>
      <strong>1983</strong>
      <span>Ommen</span>
    </div>
  );
}
