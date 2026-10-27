import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BelEnPlan from "@/components/BelEnPlan";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Woningbouw",
  description:
    "Vrijstaande woningen, 2-onder-1-kap en geschakelde woningen. Voorbeeldplannen aanpasbaar. Ontwerp en vergunning kunnen wij verzorgen.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

export default function WoningbouwPage() {
  const vrijstaand = getProject("nieuwbouw-vrijstaande-woning-emmeloord");
  const kap = getProject("2-onder-1-kap-ommen-vlierlanden-ommen");
  const geschakeld = getProject("buiksloterham-amsterdam-noord");

  return (
    <main>
      <PageHeader
        blad="Blad — Woningbouw"
        title="Een woning laten bouwen"
        lead="Vrijstaand, 2-onder-1-kap of geschakeld. Voorbeeldplannen die u volledig aanpast. Traditionele bouwmethode. Brochure op aanvraag."
      />

      <section data-section="intro" className="border-b border-ink/15">
        <div className={`${wrap} grid items-start gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]`}>
          <div className="space-y-4 text-lg">
            <p>
              U komt met een kavel, een idee of alleen een wens. Wij kunnen het ontwerp en de aanvraag van de
              omgevingsvergunning verzorgen. Hebt u al een architect, dan bouwen wij in bouwteamverband.
            </p>
            <p>Afspraak is afspraak. U spreekt met de persoon die beslist.</p>
            <BelEnPlan />
          </div>
          <figure className="border border-ink/20 bg-white p-2">
            <Image
              src="/beeld/woning-lichte-steen.jpg"
              alt="Woning in lichte steen, gebouwd door Van Pijkeren Bouw Ommen"
              width={2400}
              height={1601}
              unoptimized
              sizes="(min-width: 1024px) 480px, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="px-1 pt-2 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-deep-blue">
              Werkfoto · woning
            </figcaption>
          </figure>
        </div>
      </section>

      <Type
        id="vrijstaand"
        blad="Vrijstaand"
        title="Vrijstaande woning"
        text="Een plan op maat voor uw kavel. In Emmelhage in Emmeloord maakten wij samen met de opdrachtgever het plan. In het buitengebied van Ommen deden wij dat ook."
        project={vrijstaand}
        extraHref="/projecten/nieuwbouw-vrijstaande-woning-ommen"
        extraLabel="Vrijstaande woning in Ommen"
      />
      <Type
        id="twee-onder-een-kap"
        blad="2-onder-1-kap"
        title="2-onder-1-kapwoning"
        text="Voorbeeldplannen, ook met garage, volledig aan te passen. In De Vlierlanden in Ommen zijn de woningen gasloos, met energielabel A+++. Dat staat zo in het projectarchief. De brochure vraagt u aan."
        project={kap}
      />
      <Type
        id="geschakeld"
        blad="Geschakeld"
        title="Geschakelde woningen"
        text="Zelfbouw en CPO in Almere en op IJburg in Amsterdam, onder meer met MaxHuis en Jan Bochmann Architecten. Het woonhuis aan de Klaprozenweg in Buiksloterham is ontworpen door Jan Bochmann Architecten."
        project={geschakeld}
      />

      <section id="voorbeeldplannen" data-section="voorbeeldplannen" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Voorbeeldplannen en brochure</h2>
          <p className="mt-4 max-w-2xl text-lg">
            De voorbeeldplannen zijn een vertrekpunt. Indeling, gevel en maat past u aan. De brochure is op aanvraag:
            bel, mail, of zet het in het formulier. Er staat geen download op deze site.
          </p>
          <div className="mt-6">
            <BelEnPlan line />
          </div>
        </div>
      </section>
    </main>
  );
}

function Type({
  id,
  blad,
  title,
  text,
  project,
  extraHref,
  extraLabel,
}: {
  id: string;
  blad: string;
  title: string;
  text: string;
  project: ReturnType<typeof getProject>;
  extraHref?: string;
  extraLabel?: string;
}) {
  return (
    <section id={id} data-section={id} className="border-b border-ink/15">
      <div className={`${wrap} py-14`}>
        <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">{blad}</p>
        <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">{title}</h2>
        <p className="mt-4 max-w-2xl text-lg">{text}</p>
        {extraHref && extraLabel ? (
          <p className="mt-4">
            <Link href={extraHref} className="text-lg text-deep-blue underline underline-offset-4">
              {extraLabel}
            </Link>
          </p>
        ) : null}
        {project ? (
          <div className="mt-8 max-w-xl">
            <ProjectCard project={project} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
