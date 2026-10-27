import type { Metadata } from "next";
import BelEnPlan from "@/components/BelEnPlan";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectIndex from "@/components/ProjectIndex";
import { filterProjects, getProject } from "@/lib/projects";
import { ONDERHOUD, VERBOUW } from "@/lib/site";

export const metadata: Metadata = {
  title: "Verbouw en onderhoud",
  description:
    "Uitbouw, dakopbouw, dakkapellen, serre en carport. Onderhoud aan kozijnen, daken, beglazing en inbraakwering. Van Pijkeren Bouw Ommen.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

export default function VerbouwPage() {
  const dak = getProject("dakopbouw-woning-in-ommen");
  const verbouw = filterProjects("verbouw");
  const onderhoud = filterProjects("onderhoud");

  return (
    <main>
      <PageHeader
        blad="Blad — Verbouw en onderhoud"
        title="Verbouwen en onderhouden"
        lead="Van een dakkapel tot een extra verdieping met appartementen. En het onderhoud dat een huis of pand op tijd nodig heeft."
      />

      <section data-section="verbouw" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-10 py-14 lg:grid-cols-2`}>
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Verbouw</h2>
            <ul className="checksheet mt-6">
              {VERBOUW.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-lg">
              In Zwolle maakten wij dakopbouwen, waaronder een extra etage met appartementen aan de Vechtstraat. In
              Ommen staat een complete nieuwe dakopbouw op een bestaande woning.
            </p>
          </div>
          {dak ? <ProjectCard project={dak} /> : null}
        </div>
      </section>

      <section id="onderhoud" data-section="onderhoud" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Onderhoud</h2>
          <p className="mt-4 max-w-2xl text-lg">Een lijst zoals op een werktekening. Wat niet op de lijst staat, vraagt u gewoon.</p>
          <ul className="checksheet mt-6 max-w-3xl">
            {ONDERHOUD.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-8">
            <BelEnPlan />
          </div>
        </div>
      </section>

      <section data-section="projectlijst" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-12 py-14 lg:grid-cols-2`}>
          <div>
            <h2 className="text-4xl">Verbouw in het archief</h2>
            <div className="mt-6">
              <ProjectIndex projects={verbouw} />
            </div>
          </div>
          <div>
            <h2 className="text-4xl">Onderhoud in het archief</h2>
            <div className="mt-6">
              <ProjectIndex projects={onderhoud} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
