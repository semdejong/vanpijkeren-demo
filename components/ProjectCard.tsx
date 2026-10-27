import Link from "next/link";
import Bouwbord from "@/components/Bouwbord";
import ProjectImage from "@/components/ProjectImage";
import { excerpt, fotoAlt, type ProjectView } from "@/lib/projects";

export default function ProjectCard({ project }: { project: ProjectView }) {
  const image = project.afbeeldingen[0];
  return (
    <article className="min-w-0 border border-ink/15 bg-white" data-section="projectkaart">
      <Link href={`/projecten/${project.slug}`} className="block text-ink no-underline">
        {image ? (
          <div className="bg-concrete">
            <ProjectImage
              src={image.src}
              w={image.w}
              h={image.h}
              alt={fotoAlt(project, 0)}
              sizes="(min-width: 1024px) 540px, 100vw"
            />
          </div>
        ) : null}
        <div className="p-3 sm:p-4">
          <Bouwbord
            meta={project.categorieLabel}
            rows={[
              { label: "Werk", value: project.titel },
              { label: "Plaats", value: project.plaats || "Niet vermeld" },
              { label: "Ontwerp", value: project.ontwerpLabel },
              { label: "Uitvoering", value: "Van Pijkeren Bouw Ommen" },
            ]}
          />
          {project.alinea[0] ? (
            <p className="mt-3 text-lg leading-snug text-ink">{excerpt(project.alinea[0])}</p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
