import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { countByFilter, FILTERS, filterProjects, getAllProjects, isFilterId } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Archief van Van Pijkeren Bouw Ommen. Filter op woningbouw, geschakeld, utiliteitsbouw, verbouw en onderhoud.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

export default function ProjectenPage(props: { searchParams: Promise<{ categorie?: string | string[] }> }) {
  const total = getAllProjects().length;
  return (
    <main>
      <PageHeader
        blad="Blad — Archief"
        title="Projecten"
        lead={`Alle ${total} projecten uit het archief, met plaats, categorie en ontwerp.`}
      />
      <Suspense fallback={<p className={`${wrap} py-10 text-lg`}>Het archief wordt geopend…</p>}>
        <Archive searchParams={props.searchParams} />
      </Suspense>
    </main>
  );
}

async function Archive({ searchParams }: { searchParams: Promise<{ categorie?: string | string[] }> }) {
  const params = await searchParams;
  const raw = Array.isArray(params.categorie) ? params.categorie[0] : params.categorie;
  const active = raw && isFilterId(raw) ? raw : "alle";
  const projects = filterProjects(active);

  return (
    <section data-section="archief" className="border-b border-ink/15">
      <div className={`${wrap} py-10`}>
        <nav aria-label="Filter projecten" className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => {
            const href = filter.id === "alle" ? "/projecten" : `/projecten?categorie=${filter.id}`;
            const current = filter.id === active;
            return (
              <Link
                key={filter.id}
                href={href}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 items-center border px-3 font-mono text-lg ${
                  current ? "border-ink bg-ink text-paper" : "border-ink/30 bg-white text-ink"
                }`}
              >
                {filter.label} ({countByFilter(filter.id)})
              </Link>
            );
          })}
        </nav>
        <p className="mt-6 font-mono text-lg text-deep-blue">
          {projects.length} {projects.length === 1 ? "project" : "projecten"}
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
