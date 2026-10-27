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
          { label: "Bereikbaarheid / openingstijden", value: placeholders.bereikbaarheid },
        ]}
      />
      <div>
        <p className="text-lg">
          {company.legalName}
          <br />
          {company.street}, {company.postalCode} {company.city}
        </p>
        <p className="mt-4 text-lg">KvK {company.kvk}</p>
        <p className="mt-4 text-lg">
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-deep-blue underline underline-offset-4"
          >
            Route via Google Maps
          </a>
        </p>
        <p className="mt-4 max-w-md text-lg">
          Parkeren en bereikbaarheid vullen wij niet zelf in. Die gegevens staan niet op de huidige site.
        </p>
      </div>
    </div>
  );
}
