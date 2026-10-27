import type { Metadata } from "next";
import BelEnPlan from "@/components/BelEnPlan";
import Fotolog from "@/components/Fotolog";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectIndex from "@/components/ProjectIndex";
import Register from "@/components/Register";
import { filterProjects, getProjects } from "@/lib/projects";
import { ONDERHOUD_REGISTER, VERBOUW_REGISTER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Verbouw en onderhoud",
  description:
    "Uitbouw, dakopbouw, dakkapellen, serre en carport. Onderhoud aan kozijnen, daken, beglazing en inbraakwering. Van Pijkeren Bouw Ommen.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

export default function VerbouwPage() {
  const [dak, etage] = getProjects([
    "dakopbouw-woning-in-ommen",
    "dakopbouw-en-10-appartementen-te-zwolle",
  ]);
  const verbouw = filterProjects("verbouw");
  const onderhoud = filterProjects("onderhoud");

  return (
    <main>
      <PageHeader
        blad="Blad — Verbouw en onderhoud"
        title="Verbouwen en onderhouden"
        lead="Van een dakkapel tot een extra verdieping met appartementen. En het onderhoud dat een huis of pand op tijd nodig heeft."
        meta="Bestaande bouw"
        rows={[
          { label: "Werk", value: "Verbouw en onderhoud" },
          { label: "Van", value: "Dakkapel tot extra etage" },
          { label: "Voorbeeld", value: "Vechtstraat, Zwolle" },
          { label: "Onderhoud", value: "Kap, kozijn, schoorsteen" },
          { label: "Inbraakwering", value: "Kerntrekbeveiliging" },
        ]}
      />

      <section data-section="verbouw" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Verbouw, post voor post</h2>
          <p className="mt-4 max-w-2xl text-lg">
            In Zwolle maakten wij dakopbouwen, waaronder een extra etage aan de Vechtstraat. In Ommen staat een
            complete nieuwe dakopbouw op een bestaande woning, en de uitbreiding van sporthal De Slaghen.
          </p>
          <div className="mt-8">
            <Register rows={VERBOUW_REGISTER} meta="Verbouw" />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ProjectCard project={dak} />
            <ProjectCard project={etage} />
          </div>
        </div>
      </section>

      <section data-section="fotolog" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Wat er aan een bestaand pand verandert</h2>
          <div className="mt-8">
            <Fotolog
              slugs={[
                "dakopbouw-woning-in-ommen",
                "dakkapellen-en-serre-te-zwolle",
                "carport-te-ommen",
                "verbouw-sporthal-te-ommen",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="onderhoud" data-section="onderhoud" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Onderhoudsstaat</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Een lijst zoals op een werktekening. Wat niet op de lijst staat, vraagt u gewoon. Wat geen eigen foto in
            het archief heeft, laten wij leeg in plaats van een voorbeeld te verzinnen.
          </p>
          <div className="mt-8">
            <Register rows={ONDERHOUD_REGISTER} meta="Onderhoud" />
          </div>
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
