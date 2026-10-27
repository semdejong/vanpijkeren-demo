import type { Metadata } from "next";
import BouwplanForm from "@/components/BouwplanForm";
import ContactPanel from "@/components/ContactPanel";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Van Pijkeren Bouw Ommen, Brink 31, 7731 TD Ommen. Bel 0529 45 27 75 of mail info@vanpijkerenbouw.nl.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        blad="Blad — Contact"
        title="Contact en route"
        lead="Brink 31 in Ommen. Bel of mail, of beschrijf uw bouwplan. Wij bellen terug voor een kennismaking."
      />
      <section data-section="contact" className="border-b border-ink/15">
        <div className="mx-auto w-full max-w-[76rem] px-5 py-12">
          <ContactPanel />
        </div>
      </section>
      <section data-section="formulier-blok" className="border-b border-ink/15">
        <div className="mx-auto grid w-full max-w-[76rem] gap-8 px-5 py-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Bouwplan bespreken</h2>
            <p className="mt-4 text-lg">
              Naam, telefoon en e-mail zijn genoeg om te starten. De rest helpt ons het gesprek voor te bereiden.
            </p>
          </div>
          <BouwplanForm />
        </div>
      </section>
    </main>
  );
}
