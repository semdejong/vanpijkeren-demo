/**
 * Bedrijfsgegevens van Van Pijkeren Bouw Ommen B.V.
 * Geen openingstijden, parkeerinstructie, reviews of medewerkersnamen:
 * die staan niet op de bron-site.
 */
export const content = {
  slug: "vanpijkeren-demo",

  company: {
    legalName: "Van Pijkeren Bouw Ommen B.V.",
    name: "Van Pijkeren Bouw",
    founded: 1983,
    street: "Brink 31",
    postalCode: "7731 TD",
    city: "Ommen",
    region: "Ommen – Zwolle",
    phoneDisplay: "0529 45 27 75",
    phoneTel: "0529452775",
    email: "info@vanpijkerenbouw.nl",
    kvk: "05036102",
    logo: "/logo-van-pijkeren-bouw.jpg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brink+31%2C+7731+TD+Ommen",
  },

  placeholders: {
    bereikbaarheid: "[door klant aan te vullen]",
    parkeren: "[door klant aan te vullen]",
  },

  colors: {
    primary: "#0B6E52",
    primaryForeground: "#ffffff",
    accent: "#009DDC",
    background: "#F6F5F2",
    foreground: "#16191B",
    muted: "#E8E6E1",
    blue: "#009DDC",
    green: "#0AB487",
    deepBlue: "#00628C",
    deepGreen: "#0B6E52",
    ink: "#16191B",
  },

  seo: {
    title: "Van Pijkeren Bouw Ommen | U vraagt, wij bouwen",
    description:
      "Allround aannemer in Ommen voor nieuwbouw, verbouw en onderhoud. Woningbouw en utiliteitsbouw. Familiebedrijf sinds 1983.",
    lang: "nl",
  },

  nav: [
    { label: "Woningbouw", href: "/woningbouw" },
    { label: "Utiliteitsbouw", href: "/utiliteitsbouw" },
    { label: "Verbouw & onderhoud", href: "/verbouw-en-onderhoud" },
    { label: "Projecten", href: "/projecten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],
};

export type Content = typeof content;
