import type { Metadata } from "next";
import Link from "next/link";
import BouwplanForm from "@/components/BouwplanForm";
import ContactPanel from "@/components/ContactPanel";
import PageHeader from "@/components/PageHeader";
import Register from "@/components/Register";
import { content } from "@/content";
import { DAARNA, MEENEMEN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Van Pijkeren Bouw Ommen, Brink 31, 7731 TD Ommen. Bel 0529 45 27 75 of mail info@vanpijkerenbouw.nl.",
};

const wrap = "mx-auto w-full max-w-[76rem] px-5";

export default function ContactPage() {
  const { company } = content;
  return (
    <main>
      <PageHeader
        blad="Blad — Contact"
        title="Contact en route"
        lead="Brink 31 in Ommen. Bel of mail, of beschrijf uw bouwplan. Wij bellen terug voor een kennismaking. Een vaste reactietijd noemen wij niet."
        meta="Route"
        rows={[
          { label: "Adres", value: `${company.street}, ${company.city}` },
          { label: "Postcode", value: company.postalCode },
          { label: "Telefoon", value: company.phoneDisplay },
          { label: "E-mail", value: <span className="normal-case">{company.email}</span> },
          { label: "Kaart", value: "Link, geen ingesloten kaart" },
        ]}
      />
      <section data-section="contact" className="border-b border-ink/15">
        <div className={`${wrap} py-12`}>
          <ContactPanel />
          <p className="mt-6 max-w-2xl text-lg">
            De kaart opent in een nieuw venster. Er laadt hier geen ingesloten kaart. Parkeren en openingstijden
            staan op het bord als [door klant aan te vullen]: die gegevens staan niet op de bron.
          </p>
          <p className="mt-4">
            <Link href="/#werkgebied" className="text-lg text-deep-blue underline underline-offset-4">
              Afstanden vanaf Brink 31
            </Link>
          </p>
        </div>
      </section>
      <section data-section="daarna" className="border-b border-ink/15">
        <div className={`${wrap} grid items-start gap-10 py-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}>
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Wat er daarna gebeurt</h2>
            <p className="mt-4 text-lg">Geen loket. U spreekt met iemand die kan beslissen.</p>
            <h3 className="mt-8 font-mono text-lg font-medium uppercase tracking-[0.08em] text-deep-blue">
              Meenemen als u langskomt
            </h3>
            <ul className="checksheet mt-3">
              {MEENEMEN.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Register rows={DAARNA} kicker="Vervolg" meta="Kennismaking" />
        </div>
      </section>
      <section data-section="formulier-blok" className="border-b border-ink/15">
        <div className={`${wrap} grid gap-8 py-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.1fr)]`}>
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Bouwplan bespreken</h2>
            <p className="mt-4 text-lg">
              Naam, telefoon en e-mail zijn genoeg om te starten. De rest helpt ons het gesprek voor te bereiden. Dit
              is een conceptsite: het formulier wordt niet verzonden.
            </p>
            <p className="mt-4 text-lg">
              Liever de uitgebreide pagina, met de woningtypes en de vragen?{" "}
              <Link href="/bouwplan" className="text-deep-blue underline underline-offset-4" data-cta="offerte">
                Bouwplan bespreken
              </Link>
              .
            </p>
          </div>
          <BouwplanForm />
        </div>
      </section>
    </main>
  );
}
