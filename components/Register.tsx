import Link from "next/link";
import type { RegisterRow } from "@/lib/site";

export default function Register({
  rows,
  kicker = "Bestek",
  meta,
}: {
  rows: readonly RegisterRow[];
  kicker?: string;
  meta?: string;
}) {
  return (
    <div className="register">
      <div className="register-head">
        <span>{kicker}</span>
        {meta ? <span>{meta}</span> : null}
      </div>
      <div className="register-cols" aria-hidden="true">
        <span>Post</span>
        <span>Omschrijving</span>
      </div>
      <ul>
        {rows.map((row) => (
          <li key={row.post}>
            <h3>{row.post}</h3>
            <div>
              <p>{row.tekst}</p>
              {row.href && row.hrefLabel ? (
                <p className="mt-2">
                  <Link href={row.href} className="text-deep-blue underline underline-offset-4">
                    {row.hrefLabel}
                  </Link>
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
