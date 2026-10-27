import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BelEnPlan from "@/components/BelEnPlan";
import Bouwbord from "@/components/Bouwbord";
import ProjectCard from "@/components/ProjectCard";
import ProjectImage from "@/components/ProjectImage";
import { energieVan, excerpt, fotoAlt, getAllProjects, getProject, relatedProjects } from "@/lib/projects";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project niet gevonden" };
  return {
    title: project.titel,
    description: excerpt(project.alinea[0] ?? project.titel, 155),
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<p className="mx-auto w-full max-w-[76rem] px-5 py-10 text-lg">Project laden…</p>}>
      <ProjectBody params={params} />
    </Suspense>
  );
}

async function ProjectBody({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const energie = energieVan(project);
  const related = relatedProjects(project);

  return (
    <main>
      <article data-section="project">
        <header className="border-b border-ink/15">
          <div className="mx-auto w-full max-w-[76rem] px-5 py-10">
            <p>
              <Link href="/projecten" className="font-mono text-lg text-deep-blue underline underline-offset-4">
                ← Alle projecten
              </Link>
            </p>
            <p className="mt-6 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
              {project.categorieLabel}
            </p>
            <h1 className="mt-3 max-w-4xl text-[clamp(2.4rem,5vw,4.2rem)]">{project.titel}</h1>
            <p className="mt-4 max-w-2xl font-mono text-lg text-deep-blue">
              {project.afbeeldingen.length} {project.afbeeldingen.length === 1 ? "foto" : "foto's"} op de eigen maat
              {project.plaats ? ` · ${project.plaats}` : ""}
            </p>
          </div>
        </header>
        <div className="mx-auto grid w-full max-w-[76rem] gap-10 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div className="min-w-0 space-y-8">
            {project.afbeeldingen.map((image, index) => (
              <figure key={image.src} className="border border-ink/15 bg-concrete">
                <ProjectImage
                  src={image.src}
                  w={image.w}
                  h={image.h}
                  alt={fotoAlt(project, index)}
                  eager={index === 0}
                  sizes={`(min-width: 1024px) ${Math.min(image.w, 760)}px, 100vw`}
                />
                <figcaption className="bg-white px-3 py-2 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-deep-blue">
                  Foto {index + 1} · {image.w} × {image.h}
                </figcaption>
              </figure>
            ))}
            <div className="space-y-4 text-lg">
              <TextBlocks lines={project.alinea} />
            </div>
          </div>
          <div className="lg:sticky lg:top-28">
            <Bouwbord
              meta={project.categorieLabel}
              rows={[
                { label: "Werk", value: project.titel },
                { label: "Plaats", value: project.plaats || "Niet vermeld" },
                { label: "Ontwerp", value: project.ontwerpLabel },
                { label: "Uitvoering", value: "Van Pijkeren Bouw Ommen" },
                { label: "Foto's", value: String(project.afbeeldingen.length) },
                ...(energie ? [{ label: "Energie", value: energie }] : []),
              ]}
            />
          </div>
        </div>
        {related.length > 0 ? (
          <aside data-section="verwant" className="border-t border-ink/15">
            <div className="mx-auto w-full max-w-[76rem] px-5 py-10">
              <h2 className="text-3xl">Meer in {project.categorieLabel.toLowerCase()}</h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {related.map((item) => (
                  <ProjectCard key={item.slug} project={item} />
                ))}
              </div>
            </div>
          </aside>
        ) : null}
        <section data-section="vervolg" className="border-t border-ink/15">
          <div className="mx-auto w-full max-w-[76rem] px-5 py-10">
            <h2 className="text-3xl">Dit soort werk bespreken</h2>
            <p className="mt-4 max-w-2xl text-lg">
              Bel, of stuur een bouwplan. Wij bellen terug voor een kennismaking.
            </p>
            <div className="mt-6">
              <BelEnPlan />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

function TextBlocks({ lines }: { lines: string[] }) {
  const blocks: { kind: "p" | "list"; items: string[] }[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length === 0) return;
    blocks.push({ kind: "list", items: list });
    list = [];
  };
  lines.forEach((line) => {
    const short = line.length < 80 && !/[.!?]$/.test(line);
    if (short) list.push(line);
    else {
      flush();
      blocks.push({ kind: "p", items: [line] });
    }
  });
  flush();
  return (
    <>
      {blocks.map((block, index) =>
        block.kind === "p" ? (
          <p key={index}>{block.items[0]}</p>
        ) : (
          <ul key={index} className="checksheet">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}
