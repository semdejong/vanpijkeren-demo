import Image from "next/image";
import Link from "next/link";
import BelEnPlan from "@/components/BelEnPlan";
import Bouwbord from "@/components/Bouwbord";
import ContactPanel from "@/components/ContactPanel";
import ProjectCard from "@/components/ProjectCard";
import TapeCounter from "@/components/TapeCounter";
import { content } from "@/content";
import ProjectImage from "@/components/ProjectImage";
import { eigenOntwerpCount, fotoAlt, getAllProjects, getFeaturedProjects, getProject, ONTWERPERS } from "@/lib/projects";
import { ONDERHOUD, PRINCIPES, UTILITEIT, VERBOUW, WERKGEBIED, WERKWIJZE } from "@/lib/site";

const wrap = "mx-auto w-full max-w-[76rem] px-5";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const total = getAllProjects().length;
  const eigen = eigenOntwerpCount();
  const vlierlanden = getProject("2-onder-1-kap-ommen-vlierlanden-ommen");
  const mubo = getProject("nieuwbouw-bedrijfspand-mubo-metaal-staphorst");
  const { company } = content;

  return (
    <main>
      <section data-section="hero" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-8 py-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] lg:py-16`}>
          <div className="lg:col-start-1 lg:row-start-1">
            <div className="flex items-start justify-between gap-4">
              <p className="min-w-0 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
                Blad 01 — Het bouwbord
              </p>
              <div className="stempel" aria-hidden="true">
                <span>Rev.</span>
                <strong>1983</strong>
                <span>Ommen</span>
              </div>
            </div>
            <h1 className="mt-4 max-w-[12ch] text-[clamp(3.3rem,7.6vw,6.4rem)]">
              U vraagt, wij bouwen.
            </h1>
            <p className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              Afspraak is afspraak. Sinds {company.founded}.
            </p>
            <p className="mt-4 max-w-xl text-lg">
              Allround aannemer voor nieuwbouw, verbouw en onderhoud. Woningbouw en utiliteitsbouw, vanuit Ommen in de
              regio {company.region}, en op projecten in Almere en Amsterdam.
            </p>
          </div>
          <figure className="border border-ink/20 bg-white p-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
            <Image
              src="/beeld/hero-donkere-woning.jpg"
              alt="Woning met donkere gevel, gebouwd door Van Pijkeren Bouw Ommen"
              width={2400}
              height={1601}
              unoptimized
              preload
              sizes="(min-width: 1024px) 640px, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="px-1 pt-2 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-deep-blue">
              Werkfoto · woning
            </figcaption>
          </figure>
          <div className="lg:col-start-1 lg:row-start-2">
            <Bouwbord
              animate
              meta="Sinds 1983"
              rows={[
                { label: "Werk", value: "Uw woning, uw bedrijfspand" },
                { label: "Opdrachtgever", value: "Particulier en zakelijk" },
                { label: "Ontwerp", value: "Eigen architect of door ons" },
                { label: "Uitvoering", value: "Van Pijkeren Bouw Ommen" },
                { label: "Sinds", value: String(company.founded) },
                { label: "Adres", value: `${company.street}, ${company.city}` },
              ]}
            />
            <div className="mt-6">
              <BelEnPlan />
            </div>
          </div>
        </div>
      </section>

      <section data-section="deuren" className="doors border-b border-ink/15">
        <div className="door door-green">
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em]">Particulier</p>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(2.1rem,4vw,3.3rem)]">
            <Link href="/woningbouw" className="underline decoration-ink/30">
              Ik wil een woning bouwen of verbouwen
            </Link>
          </h2>
          <p className="mt-4 max-w-md text-lg">Een kavel, een voorbeeldplan of een huis dat groter moet.</p>
          <div className="mt-6">
            <Link className="door-sub" href="/woningbouw#vrijstaand">
              Vrijstaande woning
            </Link>
            <Link className="door-sub" href="/woningbouw#twee-onder-een-kap">
              2-onder-1-kap of geschakeld
            </Link>
            <Link className="door-sub" href="/verbouw-en-onderhoud">
              Verbouwen of onderhoud
            </Link>
          </div>
        </div>
        <div className="door door-blue">
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em]">Zakelijk</p>
          <h2 className="mt-3 max-w-[18ch] text-[clamp(2.1rem,4vw,3.3rem)]">
            <Link href="/utiliteitsbouw" className="underline decoration-ink/30">
              Ik zoek een aannemer voor bedrijfs- of utiliteitsbouw
            </Link>
          </h2>
          <p className="mt-4 max-w-md text-lg">Een hal, een kantoor, of een bouwteam met uw architect.</p>
          <div className="mt-6">
            <Link className="door-sub" href="/utiliteitsbouw#hallen">
              Bedrijfshal, kantoor, utiliteit
            </Link>
            <Link className="door-sub" href="/utiliteitsbouw#bouwteam">
              Bouwen met uw architect
            </Link>
            <Link className="door-sub" href="/projecten?categorie=utiliteitsbouw">
              Gerealiseerde bedrijfsgebouwen
            </Link>
          </div>
        </div>
      </section>

      <section data-section="projecten-uitgelicht" className="border-b border-ink/15">
        <div className={`${wrap} py-14 md:py-20`}>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
            Blad 02 — Projecten
          </p>
          <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Op de bouwborden</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Zes borden uit het archief. U leest ze van boven naar beneden: werk, plaats, ontwerp, uitvoering. Een
            woning in Ommen, een hal in Staphorst, een villa in Swifterbant, een woonhuis in Amsterdam-Noord.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <p className="mt-8">
            <Link href="/projecten" className="text-lg text-deep-blue underline underline-offset-4">
              Alle {total} projecten
            </Link>
          </p>
        </div>
      </section>

      <section id="ontwerpers" data-section="ontwerpers" className="border-b border-ink/15">
        <div className={`${wrap} py-14 md:py-20`}>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
            Blad 03 — Ontwerp
          </p>
          <h2 className="mt-3 max-w-[16ch] text-[clamp(2.2rem,5vw,3.6rem)]">Met deze ontwerpers bouwden wij</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Architecten kiezen ons voor de uitvoering. Op het projectbord staat de ontwerper als het archief die noemt.
          </p>
          <div className="mt-8 border-y border-ink/15">
            {ONTWERPERS.map((bureau) => (
              <div
                key={bureau.naam}
                className="grid gap-1 border-b border-ink/15 py-4 last:border-b-0 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-baseline"
              >
                <p className="font-display text-[1.7rem] font-bold leading-tight">{bureau.naam}</p>
                <p className="font-mono text-lg text-deep-blue">{bureau.vestiging}</p>
                <p className="flex flex-col gap-1">
                  {bureau.slugs.map((slug) => {
                    const project = getProject(slug);
                    if (!project) return null;
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
          <p className="mt-6 max-w-2xl text-lg">
            Bij {eigen} projecten staat Van Pijkeren Bouw zelf als ontwerper, inclusief de aanvraag van de vergunning.
          </p>
        </div>
      </section>

      <section id="woningbouw" data-section="woningbouw" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]`}>
          <div>
            <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
              Blad 04 — Woningbouw
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Uw woning moet uw thuis zijn.</h2>
            <p className="mt-4 text-lg">
              Vrijstaande woningen, 2-onder-1-kapwoningen en geschakelde woningen. De voorbeeldplannen past u volledig
              aan uw wensen aan. Traditionele bouwmethode. Brochure op aanvraag.
            </p>
            <p className="mt-4 text-lg">
              Ontwerp en aanvraag van de omgevingsvergunning kunnen wij verzorgen. U kunt ook komen met uw eigen
              architect. Wij bouwen dan in bouwteamverband.
            </p>
            {vlierlanden ? (
              <p className="mt-4 text-lg">
                In De Vlierlanden in Ommen staan gasloze 2-onder-1-kapwoningen in het archief, met energielabel A+++.
              </p>
            ) : null}
            <p className="mt-6">
              <Link href="/woningbouw" className="text-lg text-deep-blue underline underline-offset-4">
                Meer over woningbouw
              </Link>
            </p>
          </div>
          <div className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-3">
            {[
              ["Vrijstaand", "Een plan op uw kavel, van ontwerp tot oplevering.", "/woningbouw#vrijstaand"],
              ["2-onder-1-kap", "Voorbeeldplannen, ook met garage. Brochure op aanvraag.", "/woningbouw#twee-onder-een-kap"],
              ["Geschakeld", "Zelfbouw en CPO in Almere en Amsterdam IJburg, met MaxHuis en anderen.", "/woningbouw#geschakeld"],
            ].map(([title, text, href]) => (
              <Link key={title} href={href} className="flex min-h-44 flex-col bg-paper p-4 text-ink no-underline">
                <span className="font-display text-2xl font-bold">{title}</span>
                <span className="mt-3 text-lg">{text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section data-section="werkwijze" className="border-b border-ink/15">
        <div className={`${wrap} py-14 md:py-20`}>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
            Blad 05 — Werkwijze
          </p>
          <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Hoe een bouw bij ons loopt</h2>
          <p className="mt-4 max-w-2xl text-lg">Van het eerste gesprek tot de oplevering. Wij ontzorgen, en blijven eindverantwoordelijk.</p>
          <div className="timeline-scroll mt-8">
            <ol className="timeline">
              {WERKWIJZE.map((step) => (
                <li key={step.titel}>
                  <h3 className="text-2xl">{step.titel}</h3>
                  <p className="mt-3 text-lg">{step.tekst}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section data-section="utiliteitsbouw" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-10 py-14 md:py-20 lg:grid-cols-2`}>
          <div>
            <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
              Blad 06 — Utiliteitsbouw
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Eén ploeg voor de woning en de hal</h2>
            <p className="mt-4 text-lg">
              Dezelfde mensen bouwen een 2-onder-1-kap in Ommen en een bedrijfspand
              {mubo ? ` voor Mubo Metaal in ${mubo.plaats}` : ""}. Het ontwerp van dat pand is van De Haan Engineering
              & Consultancy uit Rouveen.
            </p>
            <ul className="checksheet mt-6">
              {UTILITEIT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-lg">
              In bouwteamverband werken wij met uw architect. U houdt één aanspreekpunt voor de uitvoering.
            </p>
            <p className="mt-6">
              <Link href="/utiliteitsbouw" className="text-lg text-deep-blue underline underline-offset-4">
                Meer over utiliteitsbouw
              </Link>
            </p>
          </div>
          <div className="grid gap-4">
            {vlierlanden?.afbeeldingen[0] ? (
              <figure className="border border-ink/20 bg-white p-2">
                <ProjectImage
                  src={vlierlanden.afbeeldingen[0].src}
                  w={vlierlanden.afbeeldingen[0].w}
                  h={vlierlanden.afbeeldingen[0].h}
                  alt={fotoAlt(vlierlanden, 0)}
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
                <figcaption className="px-1 pt-2 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-deep-blue">
                  Ommen · 2-onder-1-kap · Vlierlanden
                </figcaption>
              </figure>
            ) : null}
            {mubo?.afbeeldingen[0] ? (
              <figure className="border border-ink/20 bg-white p-2">
                <ProjectImage
                  src={mubo.afbeeldingen[0].src}
                  w={mubo.afbeeldingen[0].w}
                  h={mubo.afbeeldingen[0].h}
                  alt={fotoAlt(mubo, 0)}
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
                <figcaption className="px-1 pt-2 font-mono text-[0.8125rem] uppercase tracking-[0.12em] text-deep-blue">
                  Staphorst · bedrijfspand · Mubo Metaal
                </figcaption>
              </figure>
            ) : null}
          </div>
        </div>
      </section>

      <section data-section="verbouw-onderhoud" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-10 py-14 md:py-20 lg:grid-cols-2`}>
          <div>
            <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
              Blad 07 — Verbouw
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Verbouw</h2>
            <ul className="checksheet mt-6">
              {VERBOUW.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
              Blad 07 — Onderhoud
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Onderhoud</h2>
            <ul className="checksheet mt-6">
              {ONDERHOUD.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/verbouw-en-onderhoud" className="text-lg text-deep-blue underline underline-offset-4">
                Alles over verbouw en onderhoud
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section data-section="familie" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]`}>
          <div>
            <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
              Blad 08 — Familiebedrijf
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Familiebedrijf sinds {company.founded}</h2>
            <p className="mt-4 text-lg">
              Platte organisatiestructuur. U spreekt met de persoon die beslist. Wij zijn de spin in het bouw-web.
              Moderne technieken met traditioneel vakmanschap.
            </p>
            <p className="mt-4 font-display text-3xl font-bold">Afspraak is afspraak.</p>
            <ul className="mt-6 grid border-t border-ink/15 sm:grid-cols-2">
              {PRINCIPES.map((item) => (
                <li key={item.titel} className="border-b border-ink/15 py-3 sm:odd:pr-6 sm:even:pl-6">
                  <Link href="/over-ons#principes" className="inline-flex min-h-11 items-center font-mono text-lg uppercase tracking-[0.08em] text-deep-blue underline-offset-4 hover:underline">
                    {item.titel}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/over-ons" className="text-lg text-deep-blue underline underline-offset-4">
                Over het bedrijf
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-2 border border-ink/40 bg-white">
            <div className="border-r border-ink/15 p-4 sm:p-6">
              <TapeCounter value={company.founded} />
              <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-deep-blue">Sinds</p>
            </div>
            <div className="p-4 sm:p-6">
              <TapeCounter value={total} />
              <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-deep-blue">Projecten in het archief</p>
            </div>
          </div>
        </div>
      </section>

      <section id="werkgebied" data-section="werkgebied" className="border-b border-ink/15">
        <div className={`${wrap} py-14 md:py-20`}>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
            Blad 09 — Werkgebied
          </p>
          <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Vanuit Brink 31</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Het vaste werk is de regio {company.region}. Daarnaast staan er projecten in Almere en in Amsterdam, op
            IJburg en in Buiksloterham.
          </p>
          <div className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {WERKGEBIED.map((place) => (
              <div key={place.plaats} className="border-b border-ink/15 py-3">
                <div className="grid grid-cols-[1fr_auto] gap-4 font-mono text-lg">
                  <span>{place.plaats}</span>
                  <span>{place.km === 0 ? "0 km" : `ca. ${place.km} km`}</span>
                </div>
                <Link href={`/projecten/${place.slug}`} className="mt-1 inline-flex min-h-11 items-center text-lg text-deep-blue underline underline-offset-4">
                  {place.werk}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-deep-blue">
            Afstanden ca., hemelsbreed vanaf {company.street}, {company.city}.
          </p>
        </div>
      </section>

      <section data-section="keurmerken" className="border-b border-ink/15">
        <div className={`${wrap} py-14 md:py-20`}>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
            Blad 10 — Keurmerken
          </p>
          <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Lidmaatschap en waarborg</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <figure className="border border-ink/15 bg-white p-5">
              <div className="flex min-h-24 items-center">
                <Image
                  src="/bouwend-nederland.png"
                  alt="Logo Bouwend Nederland"
                  width={190}
                  height={73}
                  unoptimized
                  style={{ width: 190, height: "auto", maxWidth: "100%" }}
                />
              </div>
              <figcaption className="mt-4 text-lg">Van Pijkeren Bouw is lid van Bouwend Nederland.</figcaption>
            </figure>
            <figure className="border border-ink/15 bg-white p-5">
              <div className="flex min-h-24 items-center">
                <Image
                  src="/woningborg.jpg"
                  alt="Logo Woningborg"
                  width={898}
                  height={345}
                  unoptimized
                  style={{ width: "min(100%, 280px)", height: "auto" }}
                />
              </div>
              <figcaption className="mt-4 text-lg">Woningen leveren wij op met Woningborg.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section data-section="contact" className="border-b border-ink/15">
        <div className={`${wrap} py-14 md:py-20`}>
          <p className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-deep-blue">
            Blad 11 — Contact
          </p>
          <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)]">Bespreek uw bouwplan</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Bel, mail, of stuur het formulier. Wij bellen terug om een kennismaking in te plannen.
          </p>
          <div className="mt-8">
            <ContactPanel />
          </div>
          <div className="mt-8">
            <BelEnPlan />
          </div>
        </div>
      </section>
    </main>
  );
}
