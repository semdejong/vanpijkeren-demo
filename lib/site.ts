/**
 * Afstanden hemelsbreed vanaf Brink 31, Ommen (52.5205, 6.4218).
 * Afgerond op hele kilometers. 0 km is het vertrekpunt zelf.
 */
export const WERKGEBIED: { plaats: string; km: number }[] = [
  { plaats: "Ommen", km: 0 },
  { plaats: "Witharen", km: 4 },
  { plaats: "Dalfsen", km: 11 },
  { plaats: "Nieuwleusen", km: 12 },
  { plaats: "Mariënberg", km: 15 },
  { plaats: "Gramsbergen", km: 20 },
  { plaats: "Staphorst", km: 20 },
  { plaats: "Zwolle", km: 23 },
  { plaats: "Hattem", km: 25 },
  { plaats: "Havelte", km: 30 },
  { plaats: "Dronten", km: 48 },
  { plaats: "Emmeloord", km: 50 },
  { plaats: "Swifterbant", km: 53 },
  { plaats: "Espel", km: 57 },
  { plaats: "Almere", km: 81 },
  { plaats: "Amsterdam", km: 104 },
];

export const ONDERHOUD = [
  "Kozijnen, ramen en deuren",
  "Platte en hellende daken",
  "Dakoverstekken en windveren",
  "Schoorstenen",
  "Dakaansluitingen en lood",
  "Beglazing",
  "Vloeren",
  "Energiebesparende maatregelen",
  "Inbraakwerende voorzieningen, waaronder kerntrekbeveiliging",
] as const;

export const VERBOUW = [
  "Uitbouw",
  "Dakopbouw",
  "Dakkapellen",
  "Serre",
  "Carport",
  "Verbouw van een kantoorpand",
  "Verbouw van een sporthal",
  "Dakopbouw met appartementen, zoals in Zwolle",
] as const;

export const UTILITEIT = [
  "Bedrijfshallen",
  "Kantoorpanden",
  "Showrooms",
  "Winkelruimte",
  "Scholen",
  "Kerken",
  "Agrarische bouw, zoals een kapschuur",
  "Restauratie",
] as const;

export const WERKWIJZE = [
  {
    titel: "Overleg",
    tekst: "Eerst het gesprek. U spreekt met iemand die kan beslissen. Korte lijnen, platte organisatie.",
  },
  {
    titel: "Ontwerp en calculatie",
    tekst: "Een voorbeeldplan dat u aanpast, of het ontwerp van uw architect. De bouwkostencalculatie maken wij van A tot Z.",
  },
  {
    titel: "Vergunning",
    tekst: "De aanvraag van de omgevingsvergunning kunnen wij verzorgen. In oudere projecten heette dat de bouwvergunning.",
  },
  {
    titel: "Planning",
    tekst: "Afspraak is afspraak. Wij stemmen de volgorde af voordat de bouw start.",
  },
  {
    titel: "Bouw",
    tekst: "Traditionele bouwmethode. Moderne technieken met traditioneel vakmanschap.",
  },
  {
    titel: "Afwerking en oplevering",
    tekst: "Wij blijven eindverantwoordelijk tot de oplevering. Woningen leveren wij op met Woningborg.",
  },
] as const;

export const PRINCIPES: { titel: string; tekst: string }[] = [
  { titel: "Beleving", tekst: "Uw woning moet uw thuis zijn." },
  { titel: "Ontzorgen", tekst: "Wij houden het traject bij elkaar, van het eerste gesprek tot de oplevering." },
  { titel: "Communicatie", tekst: "U spreekt met de persoon die beslist." },
  { titel: "Transparantie", tekst: "De calculatie is van A tot Z, vooraf op tafel." },
  { titel: "Vooruit denken", tekst: "Vergunning, planning en uitvoering in één lijn." },
  { titel: "Coördinatie", tekst: "De spin in het bouw-web." },
  { titel: "Overleg", tekst: "Eerst het gesprek, dan de bouw." },
  { titel: "Planning", tekst: "Afspraak is afspraak." },
  { titel: "Afwerkingniveau", tekst: "Moderne technieken met traditioneel vakmanschap." },
  { titel: "Eindverantwoordelijk", tekst: "Eén aannemer, van start tot oplevering." },
  { titel: "Familiebedrijf", tekst: "Sinds 1983, met een platte organisatiestructuur." },
];

export const MEENEMEN = [
  "Kavelgegevens, als u die al hebt",
  "Uw wensen voor de woning of het pand",
  "Eventuele schetsen of een ontwerp van uw architect",
  "Een budget-indicatie",
] as const;

export const REGELEN = [
  { titel: "Ontwerp", tekst: "Wij maken een voorbeeldplan, of we bouwen het plan van uw architect." },
  { titel: "Vergunning", tekst: "De aanvraag van de omgevingsvergunning kunnen wij verzorgen." },
  { titel: "Calculatie", tekst: "Een bouwkostencalculatie van A tot Z, voordat de bouw start." },
  { titel: "Bouw", tekst: "Traditionele bouwmethode, door onze eigen ploeg." },
  { titel: "Oplevering", tekst: "Woningen leveren wij op met Woningborg." },
] as const;
