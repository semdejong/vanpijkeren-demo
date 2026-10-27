export default function PageHeader({
  blad,
  title,
  lead,
}: {
  blad: string;
  title: string;
  lead?: string;
}) {
  return (
    <header data-section="pagina-kop" className="border-b border-ink/15">
      <div className="mx-auto w-full max-w-[76rem] px-5 py-10 md:py-14">
        <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">{blad}</p>
        <h1 className="mt-3 max-w-4xl text-[clamp(2.6rem,6vw,4.6rem)] text-ink">{title}</h1>
        {lead ? <p className="mt-5 max-w-2xl text-lg leading-relaxed">{lead}</p> : null}
      </div>
    </header>
  );
}
