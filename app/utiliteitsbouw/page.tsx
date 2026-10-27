import type { Metadata } from "next";
import Link from "next/link";
import BelEnPlan from "@/components/BelEnPlan";
import Fotolog from "@/components/Fotolog";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectIndex from "@/components/ProjectIndex";
import Register from "@/components/Register";
import { filterProjects, getProject, ONTWERPERS } from "@/lib/projects";
import { UTILITEIT_REGISTER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Utiliteitsbouw",
  description:
    "Bedrijfshallen, kantoren, showrooms en andere utiliteitsbouw. Bouwteam met uw architect. Van Pijkeren Bouw Ommen.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

const BOUWTEAM = ONTWERPERS.filter((bureau) =>
  ["Te Kiefte Architecten", "Morphique Architecten", "De Haan Engineering & Consultancy", "Architectenburo W. Prins", "Bouwbureau Jansman"].includes(
    bureau.naam,
  ),
);

export default function UtiliteitPage() {
  const mubo = getProject("nieuwbouw-bedrijfspand-mubo-metaal-staphorst");
  const kantoor = getProject("kantoorpand-te-ommen-4575");
  const projects = filterProjects("utiliteitsbouw");

  return (
    <main>
      <PageHeader
        blad="Blad — Utiliteitsbouw"
        title="Bedrijfs- en utiliteitsbouw"
        lead="Dezelfde ploeg bouwt een woning en een hal. U werkt met ons alleen, of in bouwteamverband met uw architect."
        meta="Utiliteit"
        rows={[
          { label: "Werk", value: "Bedrijfspand en utiliteit" },
          { label: "Ploeg", value: "Dezelfde als de woning" },
          { label: "Samenwerking", value: "Bouwteam met uw architect" },
          { label: "Voorbeeld", value: "Mubo Metaal, Staphorst" },
          { label: "Vestiging", value: "Brink 31, Ommen" },
        ]}
      />

      <section id="hallen" data-section="hallen" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Wat er op het bestek staat</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Elke post is werk dat wij noemen. Waar het archief een gebouwd voorbeeld heeft, staat de link ernaast. Waar
            dat bord ontbreekt, zeggen wij dat.
          </p>
          <div className="mt-8">
            <Register rows={UTILITEIT_REGISTER} meta="Utiliteitsbouw" />
          </div>
        </div>
      </section>

      <section data-section="twee-borden" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Twee borden naast elkaar</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Een hal voor Mubo Metaal in Staphorst, en een kantoor op bedrijvenpark De Rotbrink in Ommen. Ander
            programma, dezelfde uitvoering.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {mubo ? <ProjectCard project={mubo} /> : null}
            {kantoor ? <ProjectCard project={kantoor} /> : null}
          </div>
        </div>
      </section>

      <section id="bouwteam" data-section="bouwteam" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">Bouwteam</p>
          <h2 className="mt-3 max-w-[18ch] text-[clamp(2rem,4vw,3rem)]">Met uw architect</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Hebt u het ontwerp al, dan voeren wij uit. U houdt één aanspreekpunt. Op de utiliteitsborden staan deze
            bureaus.
          </p>
          <div className="mt-8 border-y border-ink/15">
            {BOUWTEAM.map((bureau) => (
              <div
                key={bureau.naam}
                className="grid gap-1 border-b border-ink/15 py-4 last:border-b-0 md:grid-cols-[minmax(0,1.1fr)_12rem_minmax(0,1.2fr)] md:items-baseline"
              >
                <p className="font-display text-[1.7rem] font-bold leading-tight">{bureau.naam}</p>
                <p className="font-mono text-lg text-deep-blue">{bureau.vestiging}</p>
                <p className="flex flex-col gap-1">
                  {bureau.slugs.map((slug) => {
                    const project = getProject(slug);
                    if (!project || !project.categorie.includes("utiliteitsbouw")) return null;
                    return (
                      <Link key={slug} href={`/projecten/${slug}`} className="text-lg text-deep-blue underline underline-offset-4">
                        {project.titel}
                      </Link>
                    );
                  })}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4">
            <Link href="/#ontwerpers" className="text-lg text-deep-blue underline underline-offset-4">
              Alle ontwerpers, ook bij de woningen
            </Link>
          </p>
          <div className="mt-6">
            <BelEnPlan />
          </div>
        </div>
      </section>

      <section data-section="fotolog" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Vier opnamen</h2>
          <div className="mt-8">
            <Fotolog
              slugs={[
                "nieuwbouw-bedrijfspand-mubo-metaal-staphorst",
                "bedrijfshal-te-ommen",
                "winkelruimte-te-zwolle",
                "kapschuur-te-hattem",
              ]}
            />
          </div>
        </div>
      </section>

      <section data-section="projectlijst" className="border-b border-ink/15">
        <div className={`${wrap} py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)]">Utiliteit in het archief</h2>
          <p className="mt-4 max-w-2xl text-lg">Alle borden met de categorie utiliteitsbouw. Plaats en ontwerp staan op de regel.</p>
          <div className="mt-8">
            <ProjectIndex projects={projects} />
          </div>
        </div>
      </section>
    </main>
  );
}
