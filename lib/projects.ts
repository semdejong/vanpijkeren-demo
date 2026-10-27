import data from "@/data/projecten.json";

export type ProjectImage = { src: string; w: number; h: number };

export type Project = {
  id: string;
  slug: string;
  titel: string;
  categorie: string[];
  tekst: string[];
  ontwerp: string | null;
  afbeeldingen: ProjectImage[];
  bron: string;
};

export type ProjectView = Project & {
  plaats: string;
  alinea: string[];
  ontwerpLabel: string;
  categorieLabel: string;
};

export const CATEGORIE_LABEL: Record<string, string> = {
  woningbouw: "Woningbouw",
  geschakeld: "Geschakeld",
  utiliteitsbouw: "Utiliteitsbouw",
  verbouw: "Verbouw",
  onderhoud: "Onderhoud",
};

export const FILTERS = [
  { id: "alle", label: "Alles" },
  { id: "woningbouw", label: "Woningbouw" },
  { id: "geschakeld", label: "Geschakeld" },
  { id: "utiliteitsbouw", label: "Utiliteitsbouw" },
  { id: "verbouw", label: "Verbouw" },
  { id: "onderhoud", label: "Onderhoud" },
] as const;

export type FilterId = (typeof FILTERS)[number]["id"];

/** Uitgelicht op de homepage: mix van woning, geschakeld, hal en verbouw. */
export const FEATURED_SLUGS = [
  "2-onder-1-kap-ommen-vlierlanden-ommen",
  "buiksloterham-amsterdam-noord",
  "nieuwbouw-bedrijfspand-mubo-metaal-staphorst",
  "villa-te-swifterbant",
  "nieuwbouw-vrijstaande-woning-emmeloord",
  "dakopbouw-en-10-appartementen-te-zwolle",
] as const;

/**
 * Plaats uit titel of projecttekst. Lege string = het archief noemt geen plaats.
 * Dalfsen is hier een projectlocatie, niet de vestiging van het bedrijf.
 */
const PLAATS: Record<string, string> = {
  "2-onder-1-kap-woning-te-dronten": "Dronten",
  "2-onder-1-kap-woning-te-dalfsen": "Dalfsen",
  "2-onder-1-kap-woning-te-espel": "Espel",
  "2-onder-1-kap-woning-te-ommen": "Ommen",
  "2-onder-1-kap-woning-te-marienberg": "Mariënberg",
  "2-onder-1-kap-woning-te-gramsbergen": "Gramsbergen",
  "bedrijfshal-te-nieuwleusen": "Nieuwleusen",
  "bedrijfshal-te-staphorst": "Staphorst",
  "kantoorpand-te-ommen": "Ommen",
  "villa-te-swifterbant": "Swifterbant",
  "winkelruimte-te-zwolle": "Zwolle",
  "kapschuur-te-hattem": "Hattem",
  "showroom-sportschool-te-ommen": "Ommen",
  "kantoorpand-te-ommen-4575": "Ommen",
  "bedrijfshal-te-ommen": "Ommen",
  "verbouw-woning-te-havelte": "Havelte",
  "dakkapellen-en-serre-te-zwolle": "Zwolle",
  "renovatie-schoorsteen-te-ommen": "Ommen",
  "renovatie-kap-te-witharen": "Witharen",
  "verbouw-kantoorpand-te-ommen": "Ommen",
  "vervangen-gevelbeplating-te-ommen": "Ommen",
  "vervangen-gevelkozijnen-te-ommen": "Ommen",
  "dakkapel-met-schuifpui-te-ommen": "Ommen",
  "carport-te-ommen": "Ommen",
  "verbouw-sporthal-te-ommen": "Ommen",
  "dakopbouw-te-zwolle": "Zwolle",
  "dakopbouw-en-10-appartementen-te-zwolle": "Zwolle",
  "dakopbouw-en-8-appartementen-te-zwolle": "Zwolle",
  "verbouw-woning-te-ommen": "Ommen",
  "hoekwoning-almere": "Almere",
  "zelfbouw-amsterdam": "Amsterdam",
  "zelfbouw-ijburg": "Amsterdam (IJburg)",
  "ibba-almere": "Almere",
  "dakopbouw-woning-in-ommen": "Ommen",
  "vrijstaande-woning-tuk-bergstein": "Tuk",
  "hko1412-almere": "Almere",
  "kerntrekbeveiliging": "",
  "hko1411-almere": "Almere",
  "ijburg-create": "Amsterdam (IJburg)",
  "nieuwbouw-bedrijfspand-mubo-metaal-staphorst": "Staphorst",
  "buiksloterham-amsterdam-noord": "Amsterdam-Noord",
  "villa-rieteiland-oost-ijburg-amsterdam": "Amsterdam (IJburg)",
  "nieuwbouw-vrijstaande-woning-emmeloord": "Emmeloord",
  "nieuwbouw-vrijstaande-woning-ommen": "Ommen",
  "nieuwbouw-de-vlierlanden-ommen": "Ommen",
  "2-onder-1-kap-ommen-vlierlanden-ommen": "Ommen",
};

/** Bureaus uit het ontwerpveld of, als dat leeg is, uit de projecttekst. */
export const ONTWERPERS: { naam: string; vestiging: string; slugs: string[] }[] = [
  { naam: "Fokkema en Partners", vestiging: "Delft", slugs: ["villa-te-swifterbant"] },
  {
    naam: "Jan Bochmann Architecten",
    vestiging: "Amsterdam",
    slugs: ["buiksloterham-amsterdam-noord", "ibba-almere"],
  },
  {
    naam: "Te Kiefte Architecten",
    vestiging: "Borne",
    slugs: ["kantoorpand-te-ommen-4575", "bedrijfshal-te-ommen"],
  },
  { naam: "Morphique Architecten", vestiging: "Zwolle", slugs: ["winkelruimte-te-zwolle"] },
  {
    naam: "De Haan Engineering & Consultancy",
    vestiging: "Rouveen",
    slugs: ["nieuwbouw-bedrijfspand-mubo-metaal-staphorst"],
  },
  { naam: "Architectenburo W. Prins", vestiging: "Nieuwleusen", slugs: ["bedrijfshal-te-staphorst"] },
  {
    naam: "Bouwbureau Jansman",
    vestiging: "Ommen",
    slugs: ["kantoorpand-te-ommen", "verbouw-kantoorpand-te-ommen"],
  },
  {
    naam: "Gerlof van der Veen",
    vestiging: "Ommen",
    slugs: ["verbouw-sporthal-te-ommen", "verbouw-woning-te-ommen"],
  },
  {
    naam: "MaxHuis",
    vestiging: "Amsterdam",
    slugs: ["hko1412-almere", "hko1411-almere", "zelfbouw-ijburg", "ijburg-create"],
  },
  { naam: "EH Architects", vestiging: "Den Haag", slugs: ["hoekwoning-almere"] },
  {
    naam: "Bouwkundig Tekenburo Gerrit Scholten",
    vestiging: "Heerde",
    slugs: ["dakopbouw-en-8-appartementen-te-zwolle"],
  },
  {
    naam: "Architect Johan Fieten",
    vestiging: "Bouwbegeleiding J2L",
    slugs: ["verbouw-woning-te-havelte"],
  },
  {
    naam: "Ontwerp aangeleverd door opdrachtgever",
    vestiging: "Jaren-30-stijl",
    slugs: ["2-onder-1-kap-woning-te-dalfsen"],
  },
];

const PRICE_LINES = new Set([
  "Kavels Nieuwbouwproject Vlierlanden Fase 2C",
  "Grondkosten",
  "Verkoopkosten waaronder; makelaar, notaris en kadastrale kosten",
  "Legeskosten gemeente, aansluitkosten nutsbedrijven en riolering",
  "21% btw",
  "Kosten financiering",
  "Keukeninrichting",
  "Opties;",
]);

const STALE: [string, string][] = [
  ["gaat Van Pijkeren Bouw dit bedrijfspand bouwen", "bouwde Van Pijkeren Bouw dit bedrijfspand"],
  ["Van Pijkeren Bouw start binnenkort met de bouw van", "Van Pijkeren Bouw bouwde"],
  ["is deze woning in aanbouw door Van Pijkeren Bouw", "bouwde Van Pijkeren Bouw deze woning"],
  ["is Van Pijkeren begonnen met de bouw van", "bouwde Van Pijkeren"],
  ["is Van Pijkeren Bouw gestart met de bouw van", "bouwde Van Pijkeren Bouw"],
  ["bouwt Van Pijkeren Bouw Ommen", "bouwde Van Pijkeren Bouw Ommen"],
];

function tidy(paragraph: string) {
  return paragraph
    .replace(/VanPijkerenBouw/g, "Van Pijkeren Bouw")
    .replace(/VanPijkeren/g, "Van Pijkeren")
    .replace(/woning woning/gi, "woning")
    .replace(/[ \t]+/g, " ")
    .replace(/\s+([.,;])/g, "$1")
    .trim();
}

function rewrite(slug: string, paragraphs: string[]) {
  let lines = paragraphs
    .map(tidy)
    .filter((line) => line.length > 0 && !/^(klik hier|bekijk hier)\b/i.test(line));

  if (slug === "2-onder-1-kap-ommen-vlierlanden-ommen") {
    lines = lines
      .filter((line) => !PRICE_LINES.has(line))
      .map((line) =>
        line
          .replace("De woningen nieuwbouwproject Vlierlanden fase 2C;", "Nieuwbouwproject Vlierlanden fase 2C.")
          .replace("Iedere woning wordt volledig gasloos aangeboden.", "Iedere woning is volledig gasloos.")
          .replace("verwarmt", "verwarmd")
          .replace("De woning wordt traditioneel gebouwd", "De woning is traditioneel gebouwd"),
      );
  }

  return lines.map((line) => STALE.reduce((text, [from, to]) => text.replace(from, to), line));
}

function present(project: Project): ProjectView {
  const plaats = PLAATS[project.slug];
  if (plaats === undefined) {
    throw new Error(`Geen plaats voor project ${project.slug}`);
  }
  for (const categorie of project.categorie) {
    if (!CATEGORIE_LABEL[categorie]) {
      throw new Error(`Onbekende categorie ${categorie} op ${project.slug}`);
    }
  }
  return {
    ...project,
    plaats,
    alinea: rewrite(project.slug, project.tekst),
    ontwerpLabel: project.ontwerp?.trim() || "Niet vermeld",
    categorieLabel: project.categorie.map((categorie) => CATEGORIE_LABEL[categorie] ?? categorie).join(", "),
  };
}

const raw = data as Project[];
const projects = [...raw].reverse().map(present);
const bySlug = new Map(projects.map((project) => [project.slug, project]));

for (const slug of FEATURED_SLUGS) {
  if (!bySlug.has(slug)) throw new Error(`Uitgelicht project ontbreekt: ${slug}`);
}
for (const bureau of ONTWERPERS) {
  for (const slug of bureau.slugs) {
    if (!bySlug.has(slug)) throw new Error(`Ontwerperlink ontbreekt: ${bureau.naam} → ${slug}`);
  }
}

export function getAllProjects() {
  return projects;
}

export function getProject(slug: string) {
  return bySlug.get(slug);
}

export function getFeaturedProjects() {
  return FEATURED_SLUGS.map((slug) => bySlug.get(slug)!);
}

export function filterProjects(filter: string) {
  if (filter === "alle" || !CATEGORIE_LABEL[filter]) return projects;
  return projects.filter((project) => project.categorie.includes(filter));
}

export function countByFilter(filter: string) {
  return filterProjects(filter).length;
}

export function relatedProjects(project: ProjectView, amount = 3) {
  const category = project.categorie[0];
  return projects.filter((item) => item.slug !== project.slug && item.categorie.includes(category)).slice(0, amount);
}

export function eigenOntwerpCount() {
  return projects.filter((project) => (project.ontwerp ?? "").toLowerCase().includes("van pijkeren")).length;
}

export function excerpt(text: string, max = 170) {
  const clean = text.trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max);
  const space = slice.lastIndexOf(" ");
  return `${(space > 80 ? slice.slice(0, space) : slice).trim()}…`;
}

export function fotoAlt(project: ProjectView, index: number) {
  const total = project.afbeeldingen.length;
  const plek = project.plaats ? ` in ${project.plaats}` : "";
  const nummer = total > 1 ? ` Foto ${index + 1} van ${total}.` : "";
  return `${project.titel}${plek}, uitgevoerd door Van Pijkeren Bouw Ommen.${nummer}`;
}

/** Alleen als de projecttekst het zelf zegt. */
export function energieVan(project: ProjectView) {
  const text = project.alinea.join(" ");
  const gasloos = /gasloos/i.test(text);
  const label = text.match(/energielabel\s+[a-z0-9+]+/i);
  if (gasloos && label) return `Gasloos, ${label[0]}`;
  if (gasloos) return "Gasloos";
  if (label) return label[0];
  return null;
}

export function isFilterId(value: string): value is FilterId {
  return FILTERS.some((filter) => filter.id === value);
}
