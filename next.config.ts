import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    // Redirects zijn hoofdletterongevoelig. /Over-ons niet naar /over-ons sturen:
    // dat zou naar zichzelf blijven verwijzen. Die oude URL heeft een eigen pagina.
    return [
      { source: "/Nieuwbouw.aspx", destination: "/woningbouw", permanent: true },
      { source: "/Nieuwbouw/Geschakeldewoningen.aspx", destination: "/woningbouw#geschakeld", permanent: true },
      { source: "/Overons.aspx", destination: "/over-ons", permanent: true },
      { source: "/Referenties.aspx", destination: "/projecten", permanent: true },
      { source: "/Contact.aspx", destination: "/contact", permanent: true },
      { source: "/Utiliteitsbouw.aspx", destination: "/utiliteitsbouw", permanent: true },
      { source: "/Verbouw.aspx", destination: "/verbouw-en-onderhoud", permanent: true },
      { source: "/Onderhoud.aspx", destination: "/verbouw-en-onderhoud", permanent: true },
    ];
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
