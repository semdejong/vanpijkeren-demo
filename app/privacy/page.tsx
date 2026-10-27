import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring van de conceptsite van Van Pijkeren Bouw Ommen B.V.",
};

export default function PrivacyPage() {
  const { company } = content;
  return (
    <main>
      <PageHeader
        blad="Blad — Privacy"
        title="Privacy"
        lead="Kort en voor deze site. Geen tekst van een gemeente."
      />
      <section data-section="privacy" className="border-b border-ink/15">
        <div className="mx-auto w-full max-w-3xl space-y-5 px-5 py-12 text-lg">
          <p>
            {company.legalName}, handelend als {company.name}, {company.street}, {company.postalCode} {company.city}.
            KvK {company.kvk}. Telefoon {company.phoneDisplay}. E-mail {company.email}.
          </p>
          <h2 className="pt-4 text-3xl">Formulier</h2>
          <p>
            Het formulier “Bouwplan bespreken” vraagt om uw naam, telefoon, e-mail en, als u die invult, de plaats, uw
            kavel, het type bouw en een opmerking. Op deze conceptsite wordt dat formulier niet naar een server
            gestuurd. De invoer blijft in uw browser en verdwijnt als u de pagina sluit.
          </p>
          <p>
            In de echte situatie is het doel: contact opnemen over uw bouwplan en een kennismaking plannen. Niet voor
            een nieuwsbrief. Gegevens worden niet verkocht.
          </p>
          <h2 className="pt-4 text-3xl">Cookies en meting</h2>
          <p>
            Deze conceptsite zet geen marketingcookies en toont geen cookiebanner. Er laadt één cookieloos script van
            Sleads om paginabezoek op deze demonstratie te tellen. Geen Google+, geen AddThis, geen volgknoppen.
          </p>
          <h2 className="pt-4 text-3xl">Kaart</h2>
          <p>
            De route is een link naar Google Maps. Er is geen kaart ingesloten, dus die pagina laadt geen extra script
            van Google totdat u de link opent.
          </p>
          <h2 className="pt-4 text-3xl">Bewaartermijn</h2>
          <p>
            Hoe de onderneming gegevens bewaart en hoe u inzage vraagt in de echte bedrijfsvoering: [door klant te
            bevestigen].
          </p>
          <p>
            Vragen over deze tekst:{" "}
            <a className="text-deep-blue underline underline-offset-4" href={`mailto:${company.email}`} data-cta="mailen">
              {company.email}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
