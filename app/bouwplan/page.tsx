import type { Metadata } from "next";
import Link from "next/link";
import BouwplanForm from "@/components/BouwplanForm";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { content } from "@/content";
import { getProject } from "@/lib/projects";
import Fotolog from "@/components/Fotolog";
import Register from "@/components/Register";
import { DAARNA, MEENEMEN, REGELEN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bouwplan bespreken",
  description: "Bespreek uw bouwplan met Van Pijkeren Bouw Ommen. Een kavel, een idee of alleen een wens.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

const FAQ = [
  {
    vraag: "Kunnen jullie het ontwerp en de vergunning verzorgen?",
    antwoord:
      "Ja. Bij meerdere projecten in het archief is het ontwerp en de aanvraag van de vergunning door Van Pijkeren Bouw verzorgd. In oudere teksten heet dat de bouwvergunning; nu is dat de omgevingsvergunning.",
  },
  {
    vraag: "Kan ik met mijn eigen architect werken?",
    antwoord:
      "Ja. Wij bouwen in bouwteamverband met uw architect. In het archief staan onder meer Fokkema en Partners, Jan Bochmann Architecten en Te Kiefte Architecten.",
  },
  {
    vraag: "Kan ik een voorbeeldplan aanpassen?",
    antwoord:
      "Ja. De voorbeeldplannen voor een vrijstaande woning, een 2-onder-1-kapwoning en een geschakelde woning past u volledig aan uw wensen aan. De brochure is op aanvraag.",
  },
  {
    vraag: "Wat als ik nog geen kavel heb?",
    antwoord:
      "U kunt het bouwplan toch bespreken. Zet in het formulier dat u nog geen kavel hebt. Dan kijken we samen wat er mogelijk is.",
  },
  {
    vraag: "Bouwen jullie ook buiten Ommen?",
    antwoord:
      "Ja. Vanuit Brink 31 werken wij in de regio Ommen – Zwolle. In het archief staan ook projecten in Almere en Amsterdam, onder meer op IJburg en in Buiksloterham.",
  },
  {
    vraag: "Wordt mijn woning opgeleverd met Woningborg?",
    antwoord: "Woningen leveren wij op met Woningborg.",
  },
  {
    vraag: "Hoe vraag ik de brochure aan?",
    antwoord:
      "Bel 0529 45 27 75, mail info@vanpijkerenbouw.nl, of vermeld het in het formulier. Er staat geen download op deze site.",
  },
] as const;

export default function BouwplanPage() {
  const { company } = content;
  const vrijstaand = getProject("nieuwbouw-vrijstaande-woning-ommen");
  const kap = getProject("2-onder-1-kap-woning-te-gramsbergen");
  const geschakeld = getProject("hoekwoning-almere");

  return (
    <main>
      <PageHeader
        blad="Blad — Bouwplan"
        title="Een kavel, een idee of alleen een wens? Bespreek uw bouwplan."
        lead="Na uw bericht bellen wij om een kennismaking in te plannen. Een vaste reactietijd noemen wij niet."
        meta="Kennismaking"
        rows={[
          { label: "Werk", value: "Uw bouwplan" },
          { label: "Start", value: "Kavel, idee of wens" },
          { label: "Daarna", value: "Wij bellen voor een afspraak" },
          { label: "Telefoon", value: company.phoneDisplay },
          { label: "Reactietijd", value: "Niet vastgelegd" },
        ]}
      />

      <section data-section="intro" className="border-b border-ink/15">
        <div className={`${wrap} flex flex-col gap-6 py-10`}>
          <p className="font-mono text-2xl">
            <a href={`tel:${company.phoneTel}`} data-cta="bellen" className="inline-flex min-h-11 items-center text-ink underline underline-offset-4">
              {company.phoneDisplay}
            </a>
          </p>
          <p className="max-w-2xl text-lg">Afspraak is afspraak. Liever eerst bellen? Dat kan meteen.</p>
        </div>
      </section>

      <section data-section="formulier-blok" className="border-b border-ink/15 bg-white">
        <div className={`${wrap} grid gap-8 py-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.1fr)]`}>
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Uw gegevens</h2>
            <p className="mt-4 text-lg">Naam, telefoon en e-mail zijn verplicht. De rest mag u leeg laten.</p>
          </div>
          <BouwplanForm />
        </div>
      </section>

      <section data-section="daarna" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Na uw bericht</h2>
          <p className="mt-4 max-w-2xl text-lg">Vier stappen, zonder een belofte over hoe snel de telefoon gaat.</p>
          <div className="mt-8">
            <Register rows={DAARNA} kicker="Vervolg" meta="Geen vaste termijn" />
          </div>
        </div>
      </section>

      <section data-section="regelen" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Wat wij voor u kunnen regelen</h2>
          <div className="mt-8 border-y border-ink/15">
            {REGELEN.map((item) => (
              <div key={item.titel} className="grid gap-2 border-b border-ink/15 py-4 last:border-b-0 md:grid-cols-[14rem_minmax(0,1fr)]">
                <h3 className="text-2xl">{item.titel}</h3>
                <p className="text-lg">{item.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-section="woningtypes" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Drie woningtypes</h2>
          <p className="mt-4 max-w-2xl text-lg">Elk type heeft een gebouwd voorbeeld in het archief.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {vrijstaand ? <ProjectCard project={vrijstaand} /> : null}
            {kap ? <ProjectCard project={kap} /> : null}
            {geschakeld ? <ProjectCard project={geschakeld} /> : null}
          </div>
          <div className="mt-10">
            <h3 className="text-3xl">Nog vier borden uit het archief</h3>
            <div className="mt-4">
              <Fotolog
                kicker="Ook gebouwd"
                slugs={[
                  "nieuwbouw-vrijstaande-woning-emmeloord",
                  "2-onder-1-kap-ommen-vlierlanden-ommen",
                  "buiksloterham-amsterdam-noord",
                  "villa-te-swifterbant",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section data-section="eigen-architect" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Met uw eigen architect</h2>
          <p className="mt-4 max-w-2xl text-lg">
            U hoeft het ontwerp niet bij ons neer te leggen. Wij bouwen in bouwteamverband met uw architect. De villa in
            Swifterbant is bijvoorbeeld ontworpen door Fokkema en Partners uit Delft.
          </p>
          <p className="mt-4">
            <Link href="/utiliteitsbouw#bouwteam" className="text-lg text-deep-blue underline underline-offset-4">
              Bouwteam en utiliteitsbouw
            </Link>
          </p>
        </div>
      </section>

      <section data-section="meenemen" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Meenemen naar het eerste gesprek</h2>
          <ul className="checksheet mt-6 max-w-3xl">
            {MEENEMEN.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="faq" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Vragen</h2>
          <div className="mt-8 border-y border-ink/15">
            {FAQ.map((item) => (
              <div key={item.vraag} className="border-b border-ink/15 py-5 last:border-b-0">
                <h3 className="text-2xl">{item.vraag}</h3>
                <p className="mt-3 max-w-3xl text-lg">{item.antwoord}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
