import Link from "next/link";
import type { ProjectView } from "@/lib/projects";

export default function ProjectIndex({ projects }: { projects: ProjectView[] }) {
  if (projects.length === 0) {
    return <p className="text-lg">Geen projecten in deze selectie.</p>;
  }
  return (
    <ul className="border-y border-ink/15">
      {projects.map((project) => (
        <li key={project.slug} className="border-b border-ink/15 last:border-b-0">
          <Link
            href={`/projecten/${project.slug}`}
            className="grid min-h-11 grid-cols-1 gap-1 py-4 text-ink no-underline md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.7fr)_minmax(0,1.1fr)] md:items-baseline"
          >
            <span className="font-display text-[1.7rem] font-bold leading-tight">{project.titel}</span>
            <span className="font-mono text-lg text-deep-blue">{project.plaats || "Niet vermeld"}</span>
            <span className="font-mono text-lg">{project.ontwerpLabel}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
