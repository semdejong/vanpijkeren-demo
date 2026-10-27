/**
 * Afstanden hemelsbreed vanaf Brink 31, Ommen (52.5205, 6.4218).
 * Afgerond op hele kilometers. 0 km is het vertrekpunt zelf.
 */
export const WERKGEBIED: { plaats: string; km: number; slug: string; werk: string }[] = [
  { plaats: "Ommen", km: 0, slug: "2-onder-1-kap-ommen-vlierlanden-ommen", werk: "Vlierlanden, gasloos" },
  { plaats: "Witharen", km: 4, slug: "renovatie-kap-te-witharen", werk: "Renovatie kap" },
  { plaats: "Dalfsen", km: 11, slug: "2-onder-1-kap-woning-te-dalfsen", werk: "2-onder-1-kap, Gerner Marke" },
  { plaats: "Nieuwleusen", km: 12, slug: "bedrijfshal-te-nieuwleusen", werk: "Productiehal" },
  { plaats: "Mariënberg", km: 15, slug: "2-onder-1-kap-woning-te-marienberg", werk: "2-onder-1-kap" },
  { plaats: "Gramsbergen", km: 20, slug: "2-onder-1-kap-woning-te-gramsbergen", werk: "2-onder-1-kap met garage" },
  { plaats: "Staphorst", km: 20, slug: "nieuwbouw-bedrijfspand-mubo-metaal-staphorst", werk: "Bedrijfspand Mubo Metaal" },
  { plaats: "Zwolle", km: 23, slug: "dakopbouw-en-10-appartementen-te-zwolle", werk: "Dakopbouw, Vechtstraat" },
  { plaats: "Hattem", km: 25, slug: "kapschuur-te-hattem", werk: "Kapschuur" },
  { plaats: "Havelte", km: 30, slug: "verbouw-woning-te-havelte", werk: "Verbouw woning" },
  { plaats: "Dronten", km: 48, slug: "2-onder-1-kap-woning-te-dronten", werk: "2-onder-1-kap, De Gilden" },
  { plaats: "Emmeloord", km: 50, slug: "nieuwbouw-vrijstaande-woning-emmeloord", werk: "Vrijstaand, Emmelhage" },
  { plaats: "Swifterbant", km: 53, slug: "villa-te-swifterbant", werk: "Villa, Fokkema en Partners" },
  { plaats: "Espel", km: 57, slug: "2-onder-1-kap-woning-te-espel", werk: "2-onder-1-kap" },
  { plaats: "Almere", km: 81, slug: "hoekwoning-almere", werk: "Hoekwoning, Homerus Kwartier" },
  { plaats: "Amsterdam", km: 104, slug: "buiksloterham-amsterdam-noord", werk: "Buiksloterham en IJburg" },
];

export type RegisterRow = {
  post: string;
  tekst: string;
  href?: string;
  hrefLabel?: string;
};

export const UTILITEIT_REGISTER: RegisterRow[] = [
  {
    post: "Bedrijfshallen",
    tekst: "Een productiehal op het bedrijventerrein in Nieuwleusen, door ons ontworpen en gebouwd. Een hal in het buitengebied van Staphorst, ontwerp Architectenburo W. Prins. Op bedrijvenpark De Rotbrink in Ommen een hal van Te Kiefte Architecten. In Staphorst het bedrijfspand voor Mubo Metaal, ontwerp De Haan Engineering uit Rouveen.",
    href: "/projecten/nieuwbouw-bedrijfspand-mubo-metaal-staphorst",
    hrefLabel: "Bedrijfspand Mubo Metaal",
  },
  {
    post: "Kantoorpanden",
    tekst: "Een administratiekantoor in Ommen, ontwerp Bouwbureau Jansman. Op De Rotbrink een kantoorpand van Te Kiefte Architecten uit Borne.",
    href: "/projecten/kantoorpand-te-ommen-4575",
    hrefLabel: "Kantoorpand De Rotbrink",
  },
  {
    post: "Showrooms",
    tekst: "Op een bestaande locatie in Ommen is een nieuwe bedrijfsruimte gebouwd, in het archief opgenomen als showroom met sportschool.",
    href: "/projecten/showroom-sportschool-te-ommen",
    hrefLabel: "Showroom met sportschool",
  },
  {
    post: "Winkelruimte",
    tekst: "In de binnenstad van Zwolle een winkelruimte en twee appartementen. Ontwerp Morphique Architecten uit Zwolle.",
    href: "/projecten/winkelruimte-te-zwolle",
    hrefLabel: "Winkelruimte Zwolle",
  },
  {
    post: "Scholen",
    tekst: "Scholen horen bij het werk. Een apart projectbord daarvan staat niet in dit archief.",
  },
  {
    post: "Kerken",
    tekst: "Kerken horen bij het werk. Een apart projectbord daarvan staat niet in dit archief.",
  },
  {
    post: "Agrarische bouw",
    tekst: "In het buitengebied van Hattem bouwden wij een kapschuur. Het ontwerp is van Van Pijkeren Bouw.",
    href: "/projecten/kapschuur-te-hattem",
    hrefLabel: "Kapschuur Hattem",
  },
  {
    post: "Restauratie",
    tekst: "Restauratie hoort bij het werk. Een project dat alleen als restauratie is beschreven, staat niet in dit archief. Wel onderhoud aan kap, schoorsteen, kozijnen en gevel.",
    href: "/verbouw-en-onderhoud#onderhoud",
    hrefLabel: "Naar onderhoud",
  },
];

export const VERBOUW_REGISTER: RegisterRow[] = [
  {
    post: "Uitbouw",
    tekst: "Een uitbouw hoort bij het werk. Een project dat alleen een uitbouw is, staat niet als apart bord in het archief.",
  },
  {
    post: "Dakopbouw",
    tekst: "In de wijk Assendorp in Zwolle plaatsten wij een dakopbouw. In het buitengebied van Ommen kreeg een bestaande woning een compleet nieuwe dakopbouw.",
    href: "/projecten/dakopbouw-woning-in-ommen",
    hrefLabel: "Dakopbouw woning Ommen",
  },
  {
    post: "Dakkapellen",
    tekst: "In Zwolle twee dakkapellen aan een bestaande woning. In Ommen een dakkapel met kunststof schuifpui aan een recreatiewoning, als toegang naar het terras.",
    href: "/projecten/dakkapellen-en-serre-te-zwolle",
    hrefLabel: "Dakkapellen en serre, Zwolle",
  },
  {
    post: "Serre",
    tekst: "De serre in Zwolle is samen met die twee dakkapellen gebouwd.",
    href: "/projecten/dakkapellen-en-serre-te-zwolle",
    hrefLabel: "Serre in Zwolle",
  },
  {
    post: "Carport",
    tekst: "In Ommen staat een carport in het archief.",
    href: "/projecten/carport-te-ommen",
    hrefLabel: "Carport Ommen",
  },
  {
    post: "Kantoorpand",
    tekst: "Aan een kantoorpand in Ommen een grondige renovatie en verbouwing. Ontwerp Bouwbureau Jansman.",
    href: "/projecten/verbouw-kantoorpand-te-ommen",
    hrefLabel: "Verbouw kantoorpand",
  },
  {
    post: "Sporthal",
    tekst: "In opdracht van de gemeente Ommen is sporthal De Slaghen uitgebreid. Ontwerp Gerlof van der Veen.",
    href: "/projecten/verbouw-sporthal-te-ommen",
    hrefLabel: "Sporthal De Slaghen",
  },
  {
    post: "Dakopbouw met appartementen",
    tekst: "Aan de Vechtstraat in de binnenstad van Zwolle een extra etage. Elders in die binnenstad een extra etage met acht appartementen, ontwerp Bouwkundig Tekenburo Gerrit Scholten uit Heerde.",
    href: "/projecten/dakopbouw-en-10-appartementen-te-zwolle",
    hrefLabel: "Extra etage, Vechtstraat",
  },
];

export const ONDERHOUD_REGISTER: RegisterRow[] = [
  {
    post: "Kozijnen, ramen en deuren",
    tekst: "Bij een woning in Ommen zijn de gevelkozijnen vervangen door hardhouten kozijnen, met nieuwe HR++ beglazing.",
    href: "/projecten/vervangen-gevelkozijnen-te-ommen",
    hrefLabel: "Gevelkozijnen Ommen",
  },
  {
    post: "Platte en hellende daken",
    tekst: "Bij een woning in Witharen is de bestaande kap gerenoveerd. Een bord dat alleen een plat dak toont, staat niet in het archief.",
    href: "/projecten/renovatie-kap-te-witharen",
    hrefLabel: "Renovatie kap, Witharen",
  },
  {
    post: "Dakoverstekken en windveren",
    tekst: "Horen bij het onderhoud. Een apart projectbord staat niet in dit archief.",
  },
  {
    post: "Schoorstenen",
    tekst: "Herstellen of vervangen. In Ommen staat een schoorsteenrenovatie in het archief.",
    href: "/projecten/renovatie-schoorsteen-te-ommen",
    hrefLabel: "Schoorsteen Ommen",
  },
  {
    post: "Dakaansluitingen en lood",
    tekst: "Horen bij het dakwerk. Een apart projectbord staat niet in dit archief.",
  },
  {
    post: "Beglazing",
    tekst: "Nieuwe beglazing komt mee met kozijnwerk. Bij de woning in Ommen was dat HR++.",
    href: "/projecten/vervangen-gevelkozijnen-te-ommen",
    hrefLabel: "Kozijnen en beglazing",
  },
  {
    post: "Vloeren",
    tekst: "Vloeren staan op de onderhoudslijst. In Havelte zijn bij een verbouw de bestaande vloeren verwijderd en opnieuw opgebouwd.",
    href: "/projecten/verbouw-woning-te-havelte",
    hrefLabel: "Verbouw woning Havelte",
  },
  {
    post: "Gevelbeplating",
    tekst: "Bij een woning in Ommen is de bestaande gevelbeplating vervangen door kunststof beplating.",
    href: "/projecten/vervangen-gevelbeplating-te-ommen",
    hrefLabel: "Gevelbeplating Ommen",
  },
  {
    post: "Energiebesparende maatregelen",
    tekst: "Als onderhoud noemen wij ze. Gasloos en energielabel A+++ staat in het archief bij de nieuwbouw in De Vlierlanden, niet bij een onderhoudsbord.",
    href: "/projecten/2-onder-1-kap-ommen-vlierlanden-ommen",
    hrefLabel: "Vlierlanden, gasloos",
  },
  {
    post: "Inbraakwering",
    tekst: "Kerntrekbeveiliging staat als eigen bord in het archief. Geen plaats genoemd bij dat werk.",
    href: "/projecten/kerntrekbeveiliging",
    hrefLabel: "Kerntrekbeveiliging",
  },
];

export const SPIN: RegisterRow[] = [
  {
    post: "Opdrachtgever",
    tekst: "U. Een particulier met een kavel, of een opdrachtgever met een bedrijfsgebouw.",
  },
  {
    post: "Ontwerp",
    tekst: "Een voorbeeldplan van ons, of het plan van uw architect. Beide komen voor in het archief.",
  },
  {
    post: "Vergunning",
    tekst: "De aanvraag van de omgevingsvergunning kunnen wij verzorgen. In oudere borden heet dat de bouwvergunning.",
  },
  {
    post: "Calculatie",
    tekst: "De bouwkosten rekenen wij van A tot Z door, voordat de bouw start.",
  },
  {
    post: "Uitvoering",
    tekst: "Traditionele bouwmethode. Dezelfde ploeg bouwt de woning en de hal.",
  },
  {
    post: "Oplevering",
    tekst: "Wij blijven eindverantwoordelijk. Woningen leveren wij op met Woningborg.",
  },
];

export const DAARNA: RegisterRow[] = [
  { post: "Bericht", tekst: "U stuurt het formulier, of u belt of mailt. Naam en telefoon zijn genoeg om te starten." },
  { post: "Terugbellen", tekst: "Wij bellen om een kennismaking in te plannen. Een vaste reactietijd noemen wij niet." },
  { post: "Kennismaking", tekst: "Neem mee wat u al hebt: kavelgegevens, wensen, schetsen, een budget-indicatie." },
  { post: "Calculatie", tekst: "Als het plan duidelijk is, ligt de bouwkostencalculatie van A tot Z op tafel." },
];

export const FILTER_LEAD: Record<string, string> = {
  alle: "Alles door elkaar, nieuwste borden eerst. Filter als u één soort werk zoekt.",
  woningbouw: "Vrijstaande woningen, 2-onder-1-kapwoningen en villa's. Geschakelde zelfbouw heeft een eigen filter.",
  geschakeld: "Zelfbouw en CPO in Almere en Amsterdam, onder meer met MaxHuis, Jan Bochmann Architecten en EH Architects.",
  utiliteitsbouw: "Hallen, kantoren, een winkel, een kapschuur en een showroom met sportschool.",
  verbouw: "Dakopbouw, dakkapel, serre, carport, en verbouw van woning, kantoor en sporthal.",
  onderhoud: "Kap, schoorsteen, kozijnen, gevelbeplating en kerntrekbeveiliging.",
};

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
