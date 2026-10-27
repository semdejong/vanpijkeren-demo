import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BelEnPlan from "@/components/BelEnPlan";
import Bouwbord from "@/components/Bouwbord";
import Fotolog from "@/components/Fotolog";
import PageHeader from "@/components/PageHeader";
import Register from "@/components/Register";
import TapeCounter from "@/components/TapeCounter";
import { content } from "@/content";
import { countPhotos, eigenOntwerpCount, getAllProjects } from "@/lib/projects";
import { PRINCIPES, SPIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Van Pijkeren Bouw Ommen is een familiebedrijf sinds 1983. Platte organisatie, korte lijnen. Afspraak is afspraak.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

export default function OverOnsPage() {
  const { company } = content;
  const total = getAllProjects().length;
  const fotos = countPhotos();
  const eigen = eigenOntwerpCount();

  return (
    <main>
      <PageHeader
        blad="Blad — Over ons"
        title="Familiebedrijf sinds 1983"
        lead="Van Pijkeren Bouw Ommen B.V. is een allround aannemer aan de Brink in Ommen. Nieuwbouw, verbouw en onderhoud, voor woningbouw en utiliteitsbouw."
        meta={String(company.founded)}
        rows={[
          { label: "Firma", value: company.legalName },
          { label: "Sinds", value: String(company.founded) },
          { label: "KvK", value: company.kvk },
          { label: "Vestiging", value: `${company.street}, ${company.city}` },
          { label: "Organisatie", value: "Plat, korte lijnen" },
        ]}
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
              een architect, in bouwteamverband. Het archief telt {total} borden en {fotos} foto's. Dat is het werk,
              geen slogan.
            </p>
            <p>
              Moderne technieken met traditioneel vakmanschap. Uw woning moet uw thuis zijn. Een bedrijfshal krijgt
              dezelfde ploeg, dezelfde afspraak.
            </p>
            <p className="font-display text-3xl font-bold">Afspraak is afspraak.</p>
            <p>
              Het werkgebied loopt van Ommen tot Zwolle, met projecten in Almere en Amsterdam, op IJburg en in
              Buiksloterham. De vestiging is Ommen. Een project in een andere plaats verandert dat niet.
            </p>
          </div>
          <div className="grid content-start gap-6">
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
            <Bouwbord
              kicker="Firma"
              meta="Ommen"
              rows={[
                { label: "Handelsnaam", value: company.name },
                { label: "Rechtspersoon", value: company.legalName },
                { label: "Lid van", value: "Bouwend Nederland" },
                { label: "Woningen", value: "Oplevering met Woningborg" },
                { label: "Archief", value: `${fotos} foto's bij ${total} borden` },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="bouw-web" data-section="bouw-web" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
            De spin in het bouw-web
          </p>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(2rem,4vw,3rem)]">Eén punt waar de lijnen samenkomen</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Geen organogram met namen. Wel de schakels die bij een bouw horen, en die wij kunnen vasthouden.
          </p>
          <div className="mt-8">
            <Register rows={SPIN} kicker="Bouw-web" meta="Van Pijkeren Bouw Ommen" />
          </div>
        </div>
      </section>

      <section id="principes" data-section="principes" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Waar wij op sturen</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Dit zijn de uitgangspunten bij nieuwbouw. Geen poster aan de muur, wel de volgorde van een gesprek tot de
            oplevering.
          </p>
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

      <section data-section="fotolog" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Hetzelfde bord, ander werk</h2>
          <p className="mt-4 max-w-2xl text-lg">Een villa, een hal, een dakopbouw, een woonhuis in Amsterdam-Noord.</p>
          <div className="mt-8">
            <Fotolog
              slugs={[
                "villa-te-swifterbant",
                "nieuwbouw-bedrijfspand-mubo-metaal-staphorst",
                "dakopbouw-woning-in-ommen",
                "buiksloterham-amsterdam-noord",
              ]}
            />
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
            De afstanden vanaf Brink 31 staan op de voorpagina, met bij elke plaats een gebouwd voorbeeld.{" "}
            <Link href="/#werkgebied" className="text-deep-blue underline underline-offset-4">
              Bekijk het werkgebied
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
