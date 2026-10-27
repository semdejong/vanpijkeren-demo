import Link from "next/link";
import { content } from "@/content";

export default function BelEnPlan({ line = false }: { line?: boolean }) {
  const { phoneDisplay, phoneTel } = content.company;
  return (
    <div className="flex flex-wrap gap-3">
      <a className="btn btn-green max-sm:w-full" href={`tel:${phoneTel}`} data-cta="bellen">
        Bel {phoneDisplay}
      </a>
      <Link className={`${line ? "btn btn-line" : "btn btn-solid"} max-sm:w-full`} href="/bouwplan" data-cta="offerte">
        Bouwplan bespreken
      </Link>
    </div>
  );
}
