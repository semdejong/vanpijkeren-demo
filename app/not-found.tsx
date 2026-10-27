import type { Metadata } from "next";
import Link from "next/link";
import BelEnPlan from "@/components/BelEnPlan";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
};

export default function NotFound() {
  return (
    <main>
      <section data-section="niet-gevonden" className="border-b border-ink/15">
        <div className="mx-auto w-full max-w-[76rem] px-5 py-16">
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
            Blad — 404
          </p>
          <h1 className="mt-3 max-w-[14ch] text-[clamp(2.8rem,6vw,4.8rem)]">Deze pagina bestaat niet.</h1>
          <p className="mt-5 max-w-xl text-lg">
            Het adres kan van de oude site komen. De pagina’s hier zijn nieuw. Kies een blad, of bel ons.
          </p>
          <ul className="mt-8 border-y border-ink/15">
            {[
              ["/woningbouw", "Woningbouw"],
              ["/utiliteitsbouw", "Utiliteitsbouw"],
              ["/projecten", "Projecten"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href} className="border-b border-ink/15 last:border-b-0">
                <Link href={href} className="inline-flex min-h-11 items-center text-lg text-deep-blue underline underline-offset-4">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <BelEnPlan />
          </div>
        </div>
      </section>
    </main>
  );
}
