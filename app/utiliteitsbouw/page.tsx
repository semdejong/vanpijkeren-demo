import type { Metadata } from "next";
import Link from "next/link";
import BelEnPlan from "@/components/BelEnPlan";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectIndex from "@/components/ProjectIndex";
import { filterProjects, getProject } from "@/lib/projects";
import { UTILITEIT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Utiliteitsbouw",
  description:
    "Bedrijfshallen, kantoren, showrooms en andere utiliteitsbouw. Bouwteam met uw architect. Van Pijkeren Bouw Ommen.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

export default function UtiliteitPage() {
  const mubo = getProject("nieuwbouw-bedrijfspand-mubo-metaal-staphorst");
  const projects = filterProjects("utiliteitsbouw");

  return (
    <main>
      <PageHeader
        blad="Blad — Utiliteitsbouw"
        title="Bedrijfs- en utiliteitsbouw"
        lead="Dezelfde ploeg bouwt een woning en een hal. U werkt met ons alleen, of in bouwteamverband met uw architect."
      />

      <section id="hallen" data-section="hallen" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-10 py-14 lg:grid-cols-2`}>
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Wat wij bouwen</h2>
            <ul className="checksheet mt-6">
              {UTILITEIT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-lg">
              In het archief staan hallen, kantoren, een winkel, een kapschuur en een showroom met sportschool. Scholen,
              kerken en restauratie noemen wij als werk, zonder daar een los projectbord van te maken.
            </p>
          </div>
          {mubo ? <ProjectCard project={mubo} /> : null}
        </div>
      </section>

      <section id="bouwteam" data-section="bouwteam" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">Bouwteam</p>
          <h2 className="mt-3 max-w-[18ch] text-[clamp(2rem,4vw,3rem)]">Met uw architect</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Hebt u het ontwerp al, dan voeren wij uit. In het archief staan onder meer Te Kiefte Architecten, Bouwbureau
            Jansman, Morphique Architecten, Architectenburo W. Prins en De Haan Engineering & Consultancy.
          </p>
          <p className="mt-4">
            <Link href="/#ontwerpers" className="text-lg text-deep-blue underline underline-offset-4">
              Alle ontwerpers op een rij
            </Link>
          </p>
          <div className="mt-6">
            <BelEnPlan />
          </div>
        </div>
      </section>

      <section data-section="projectlijst" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Utiliteit in het archief</h2>
          <div className="mt-8">
            <ProjectIndex projects={projects} />
          </div>
        </div>
      </section>
    </main>
  );
}
