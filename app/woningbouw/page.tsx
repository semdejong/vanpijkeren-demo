import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BelEnPlan from "@/components/BelEnPlan";
import Bouwbord from "@/components/Bouwbord";
import Fotolog from "@/components/Fotolog";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectIndex from "@/components/ProjectIndex";
import { getProjects, type ProjectView } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Woningbouw",
  description:
    "Vrijstaande woningen, 2-onder-1-kap en geschakelde woningen. Voorbeeldplannen aanpasbaar. Ontwerp en vergunning kunnen wij verzorgen.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

export default function WoningbouwPage() {
  const vrijstaand = getProjects([
    "nieuwbouw-vrijstaande-woning-emmeloord",
    "nieuwbouw-vrijstaande-woning-ommen",
  ]);
  const meerVrijstaand = getProjects([
    "vrijstaande-woning-tuk-bergstein",
    "villa-te-swifterbant",
    "villa-rieteiland-oost-ijburg-amsterdam",
  ]);
  const kap = getProjects([
    "2-onder-1-kap-ommen-vlierlanden-ommen",
    "2-onder-1-kap-woning-te-gramsbergen",
  ]);
  const meerKap = getProjects([
    "2-onder-1-kap-woning-te-dronten",
    "2-onder-1-kap-woning-te-espel",
    "2-onder-1-kap-woning-te-ommen",
    "2-onder-1-kap-woning-te-marienberg",
    "2-onder-1-kap-woning-te-dalfsen",
    "nieuwbouw-de-vlierlanden-ommen",
  ]);
  const geschakeld = getProjects(["buiksloterham-amsterdam-noord", "hoekwoning-almere"]);
  const meerGeschakeld = getProjects([
    "zelfbouw-ijburg",
    "ijburg-create",
    "ibba-almere",
    "hko1411-almere",
    "hko1412-almere",
    "zelfbouw-amsterdam",
  ]);

  return (
    <main>
      <PageHeader
        blad="Blad — Woningbouw"
        title="Een woning laten bouwen"
        lead="Vrijstaand, 2-onder-1-kap of geschakeld. Voorbeeldplannen die u volledig aanpast. Traditionele bouwmethode. Brochure op aanvraag."
        meta="Woningbouw"
        rows={[
          { label: "Werk", value: "Uw woning" },
          { label: "Types", value: "Vrijstaand, kap, geschakeld" },
          { label: "Methode", value: "Traditioneel" },
          { label: "Vergunning", value: "Kunnen wij verzorgen" },
          { label: "Oplevering", value: "Met Woningborg" },
        ]}
      />

      <section data-section="intro" className="border-b border-ink/15">
        <div className={`${wrap} grid items-start gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]`}>
          <div className="space-y-4 text-lg">
            <p>
              U komt met een kavel, een idee of alleen een wens. Uw woning moet uw thuis zijn. Wij kunnen het ontwerp
              en de aanvraag van de omgevingsvergunning verzorgen. Hebt u al een architect, dan bouwen wij in
              bouwteamverband.
            </p>
            <p>
              In Emmelhage in Emmeloord en in het buitengebied van Ommen maakten wij het plan samen met de
              opdrachtgever. In Swifterbant bouwden wij een villa naar ontwerp van Fokkema en Partners uit Delft. In
              Dalfsen een 2-onder-1-kap in jaren-30-stijl, ontwerp aangeleverd door de opdrachtgever.
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
        text="Een plan op maat voor uw kavel. In de wijk Emmelhage in Emmeloord staat een vrijstaande woning met acht foto's in het archief. In het buitengebied van Ommen maakten wij het ontwerp samen met de opdrachtgever. In Tuk, nieuwbouwplan Bergstein, staat een vrijstaande woning aan de Wethouder Slootstraat. Op Rieteiland Oost in Amsterdam (IJburg) een vrijstaande villa."
        projects={vrijstaand}
        meer={meerVrijstaand}
      />
      <Type
        id="twee-onder-een-kap"
        blad="2-onder-1-kap"
        title="2-onder-1-kapwoning"
        text="Voorbeeldplannen, ook met garage, volledig aan te passen. In De Vlierlanden in Ommen zijn de woningen gasloos, traditioneel gebouwd, met energielabel A+++. Dat staat zo in het projectarchief. Verder: Garstlanden in Gramsbergen en De Gilden in Dronten, beide met garage; Espel in de Noordoostpolder; Alteveer in Ommen, door ons ontworpen en gebouwd; Mariënberg; en Gerner Marke in Dalfsen."
        projects={kap}
        meer={meerKap}
      />
      <Type
        id="geschakeld"
        blad="Geschakeld"
        title="Geschakelde woningen"
        text="Zelfbouw en CPO in Almere en op IJburg in Amsterdam, onder meer met MaxHuis en Jan Bochmann Architecten. Het woonhuis aan de Klaprozenweg in Buiksloterham is ontworpen door Jan Bochmann Architecten. De hoekwoning in Homerus Kwartier Oost in Almere is van EH Architects uit Den Haag. Aan de Saturnussingel in Almere-Poort staat een tussenwoning van 6 bij 12 meter, een Hoogtehuis van MaxHuis. Aan de Bert Haanstrakade op IJburg een Panoramahuis, ook met MaxHuis."
        projects={geschakeld}
        meer={meerGeschakeld}
      />

      <section id="voorbeeldplannen" data-section="voorbeeldplannen" className="border-b border-ink/15">
        <div className={`${wrap} grid items-start gap-10 py-14 lg:grid-cols-2`}>
          <div>
            <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
              Voorbeeldplan
            </p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">Een plan dat u zelf bijstuurt</h2>
            <p className="mt-4 text-lg">
              De voorbeeldplannen zijn een vertrekpunt, geen cataloguswoning die vastligt. Indeling, gevel en maat past
              u aan. De brochure is op aanvraag: bel, mail, of zet het in het formulier. Er staat geen download op
              deze site.
            </p>
            <p className="mt-4 text-lg">
              Zelfbouw in Amsterdam en de IbbA-regeling in Almere werken hetzelfde: u bepaalt de indeling. Wij bouwen.
            </p>
            <div className="mt-6">
              <BelEnPlan line />
            </div>
          </div>
          <Bouwbord
            kicker="Brochure"
            meta="Op aanvraag"
            rows={[
              { label: "Vrijstaand", value: "Plan op uw kavel" },
              { label: "2-onder-1-kap", value: "Ook met garage" },
              { label: "Geschakeld", value: "Zelfbouw en CPO" },
              { label: "Aanpassen", value: "Indeling, gevel, maat" },
              { label: "Download", value: "Niet op deze site" },
            ]}
          />
        </div>
      </section>

      <section data-section="fotolog" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
            Opnamen
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">Vier woningen, vier plaatsen</h2>
          <p className="mt-4 max-w-2xl text-lg">
            De foto's blijven op hun eigen maat. Geen opgeblazen beeld, wel het echte werk.
          </p>
          <div className="mt-8">
            <Fotolog
              slugs={[
                "nieuwbouw-vrijstaande-woning-emmeloord",
                "2-onder-1-kap-ommen-vlierlanden-ommen",
                "villa-te-swifterbant",
                "buiksloterham-amsterdam-noord",
              ]}
            />
          </div>
          <p className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-8">
            <Link href="/projecten?categorie=woningbouw" className="text-lg text-deep-blue underline underline-offset-4">
              Woningbouw in het archief
            </Link>
            <Link href="/projecten?categorie=geschakeld" className="text-lg text-deep-blue underline underline-offset-4">
              Geschakeld in het archief
            </Link>
          </p>
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
  projects,
  meer,
}: {
  id: string;
  blad: string;
  title: string;
  text: string;
  projects: ProjectView[];
  meer: ProjectView[];
}) {
  return (
    <section id={id} data-section={id} className="border-b border-ink/15">
      <div className={`${wrap} py-14`}>
        <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">{blad}</p>
        <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg">{text}</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <h3 className="font-mono text-lg font-medium uppercase tracking-[0.08em] text-deep-blue">Meer in het archief</h3>
          <div className="mt-3">
            <ProjectIndex projects={meer} />
          </div>
        </div>
      </div>
    </section>
  );
}
