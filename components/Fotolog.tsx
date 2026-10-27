import Link from "next/link";
import ProjectImage from "@/components/ProjectImage";
import { fotoAlt, getProjects } from "@/lib/projects";

export default function Fotolog({
  slugs,
  kicker = "Fotolog",
}: {
  slugs: readonly string[];
  kicker?: string;
}) {
  const items = getProjects(slugs);

  return (
    <div className="fotolog">
      <div className="fotolog-head">
        <span>{kicker}</span>
        <span>
          {items.length} {items.length === 1 ? "opname" : "opnamen"}
        </span>
      </div>
      <div className={`fotolog-grid ${items.length > 2 ? "fotolog-wide" : ""}`}>
        {items.map((project) => {
          const image = project.afbeeldingen[0];
          if (!image) return null;
          return (
            <Link key={project.slug} href={`/projecten/${project.slug}`} className="fotolog-cel">
              <span className="fotolog-frame">
                <ProjectImage
                  src={image.src}
                  w={image.w}
                  h={image.h}
                  alt={fotoAlt(project, 0)}
                  sizes="(min-width: 1024px) 320px, 100vw"
                />
              </span>
              <span className="fotolog-plaats">{project.plaats || "Plaats niet vermeld"}</span>
              <span className="fotolog-titel">{project.titel}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
