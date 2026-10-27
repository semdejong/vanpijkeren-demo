import Link from "next/link";
import { content } from "@/content";

export default function SiteFooter() {
  const { company, nav } = content;
  return (
    <footer data-section="footer" className="bg-ink pb-28 text-paper md:pb-12">
      <div className="mx-auto grid w-full max-w-[76rem] gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_0.9fr]">
        <div>
          <p className="font-display text-3xl font-extrabold leading-none">{company.name}</p>
          <p className="mt-4 text-lg">
            {company.legalName}
            <br />
            {company.street}
            <br />
            {company.postalCode} {company.city}
          </p>
          <p className="mt-4 font-mono text-lg">KvK {company.kvk}</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-lg text-paper underline decoration-white/40 underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="inline-flex min-h-11 items-center text-lg text-paper underline decoration-white/40 underline-offset-4">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/bouwplan" data-cta="offerte" className="inline-flex min-h-11 items-center text-lg text-paper underline decoration-white/40 underline-offset-4">
                Bouwplan bespreken
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <a href={`tel:${company.phoneTel}`} data-cta="bellen" className="inline-flex min-h-11 items-center font-mono text-lg text-paper underline decoration-white/40 underline-offset-4">
            {company.phoneDisplay}
          </a>
          <br />
          <a href={`mailto:${company.email}`} data-cta="mailen" className="inline-flex min-h-11 items-center text-lg text-paper underline decoration-white/40 underline-offset-4">
            {company.email}
          </a>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.14em] text-paper/80">
            <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="underline decoration-white/40 underline-offset-4">
              Concept door Sleads
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
