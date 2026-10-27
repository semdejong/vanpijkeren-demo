import Bouwbord from "@/components/Bouwbord";
import { content } from "@/content";

export default function ContactPanel() {
  const { company, placeholders } = content;
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <Bouwbord
        kicker="Contact"
        meta={company.city}
        rows={[
          { label: "Adres", value: `${company.street}, ${company.postalCode} ${company.city}` },
          {
            label: "Telefoon",
            value: (
              <a href={`tel:${company.phoneTel}`} data-cta="bellen">
                {company.phoneDisplay}
              </a>
            ),
          },
          {
            label: "E-mail",
            value: (
              <a href={`mailto:${company.email}`} data-cta="mailen">
                {company.email}
              </a>
            ),
          },
          { label: "Parkeren", value: placeholders.parkeren },
          { label: "Langskomen", value: placeholders.bereikbaarheid },
        ]}
      />
      <Bouwbord
        kicker="Route"
        meta="0 km"
        rows={[
          { label: "Firma", value: company.legalName },
          { label: "KvK", value: company.kvk },
          { label: "Vertrek", value: `${company.street}, ${company.city}` },
          {
            label: "Kaart",
            value: (
              <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
            ),
          },
        ]}
      />
    </div>
  );
}
