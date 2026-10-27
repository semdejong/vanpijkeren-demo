import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BelEnPlan from "@/components/BelEnPlan";
import PageHeader from "@/components/PageHeader";
import TapeCounter from "@/components/TapeCounter";
import { content } from "@/content";
import { eigenOntwerpCount, getAllProjects } from "@/lib/projects";
import { PRINCIPES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Van Pijkeren Bouw Ommen is een familiebedrijf sinds 1983. Platte organisatie, korte lijnen. Afspraak is afspraak.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

export default function OverOnsPage() {
  const { company } = content;
  const total = getAllProjects().length;
  const eigen = eigenOntwerpCount();

  return (
    <main>
      <PageHeader
        blad="Blad — Over ons"
        title="Familiebedrijf sinds 1983"
        lead="Van Pijkeren Bouw Ommen B.V. is een allround aannemer aan de Brink in Ommen. Nieuwbouw, verbouw en onderhoud, voor woningbouw en utiliteitsbouw."
      />

      <section data-section="verhaal" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-10 py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]`}>
          <div className="space-y-4 text-lg">
            <p>
              De organisatie is plat. U spreekt met de persoon die beslist. Geen loket, geen doorschuiven. Wij zijn de
              spin in het bouw-web: ontwerp, vergunning, calculatie en bouw kunnen bij ons samenkomen.
            </p>
            <p>
              Bij {eigen} projecten in het archief verzorgden wij zelf het ontwerp. Even vaak bouwen wij het plan van
              een architect, in bouwteamverband.
            </p>
            <p className="font-display text-3xl font-bold">Afspraak is afspraak.</p>
            <p>Moderne technieken met traditioneel vakmanschap. Uw woning moet uw thuis zijn.</p>
          </div>
          <div className="grid grid-cols-2 border border-ink/40 bg-white">
            <div className="border-r border-ink/15 p-5">
              <TapeCounter value={company.founded} />
              <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-deep-blue">Sinds</p>
            </div>
            <div className="p-5">
              <TapeCounter value={total} />
              <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-deep-blue">Projecten</p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="principes" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Waar wij op sturen</h2>
          <div className="mt-8 border-y border-ink/15">
            {PRINCIPES.map((item) => (
              <div key={item.titel} className="grid gap-2 border-b border-ink/15 py-4 last:border-b-0 md:grid-cols-[16rem_minmax(0,1fr)] md:items-baseline">
                <h3 className="font-mono text-lg font-medium uppercase tracking-[0.08em] text-deep-blue">{item.titel}</h3>
                <p className="text-lg">{item.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-section="keurmerken" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-6 py-14 md:grid-cols-2`}>
          <figure className="border border-ink/15 bg-white p-5">
            <Image src="/bouwend-nederland.png" alt="Logo Bouwend Nederland" width={190} height={73} unoptimized style={{ width: 190, height: "auto", maxWidth: "100%" }} />
            <figcaption className="mt-4 text-lg">Lid van Bouwend Nederland.</figcaption>
          </figure>
          <figure className="border border-ink/15 bg-white p-5">
            <Image src="/woningborg.jpg" alt="Logo Woningborg" width={898} height={345} unoptimized style={{ width: "min(100%, 280px)", height: "auto" }} />
            <figcaption className="mt-4 text-lg">Woningen leveren wij op met Woningborg.</figcaption>
          </figure>
        </div>
      </section>

      <section data-section="vervolg" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <p className="max-w-2xl text-lg">
            Het werkgebied loopt van Ommen tot Zwolle, met projecten in Almere en Amsterdam.{" "}
            <Link href="/#werkgebied" className="text-deep-blue underline underline-offset-4">
              Bekijk de afstanden
            </Link>
            .
          </p>
          <div className="mt-6">
            <BelEnPlan />
          </div>
        </div>
      </section>
    </main>
  );
}
