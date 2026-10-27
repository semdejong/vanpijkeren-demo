"use client";

import Link from "next/link";
import { useState } from "react";
import { content } from "@/content";

type Errors = Partial<Record<"naam" | "telefoon" | "email" | "privacy", string>>;

const KAVEL = [
  { id: "optie", label: "Ik heb een kavel in optie" },
  { id: "verwacht", label: "Ik verwacht een kavel toegewezen te krijgen" },
  { id: "geen", label: "Ik heb nog geen kavel" },
] as const;

const INTERESSE = [
  { id: "vrijstaand", label: "Vrijstaande woning" },
  { id: "kap", label: "2-onder-1-kap woning" },
  { id: "geschakeld", label: "Geschakelde woning" },
  { id: "verbouw", label: "Verbouw" },
  { id: "utiliteit", label: "Utiliteitsbouw" },
] as const;

export default function BouwplanForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<{ naam: string; telefoon: string } | null>(null);
  const [interesse, setInteresse] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const privacy = data.get("privacy") === "ja";
    const next: Errors = {};
    if (naam.length < 2) next.naam = "Vul uw naam in.";
    const digits = telefoon.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) next.telefoon = "Vul een telefoonnummer in.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Vul een geldig e-mailadres in.";
    if (!privacy) next.privacy = "Vink aan dat wij contact mogen opnemen.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      document.getElementById(first)?.focus();
      return;
    }
    setDone({ naam, telefoon });
  }

  if (done) {
    return (
      <div role="status" data-section="bevestiging" className="border border-ink/40 bg-white p-5 sm:p-7">
        <p className="font-mono text-[0.8125rem] uppercase tracking-[0.16em] text-deep-blue">Demonstratie</p>
        <h2 className="mt-3 text-4xl">Dank u, {done.naam}.</h2>
        <p className="mt-4 max-w-xl text-lg">
          Dit is een conceptsite. Het formulier is niet verzonden en er is niets opgeslagen.
        </p>
        <p className="mt-3 max-w-xl text-lg">
          In de echte situatie bellen wij u op {done.telefoon} om een kennismaking in te plannen. Een vaste reactietijd
          spreken wij hier niet af.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-green" href={`tel:${content.company.phoneTel}`} data-cta="bellen">
            Bel {content.company.phoneDisplay}
          </a>
          <a className="btn btn-line" href={`mailto:${content.company.email}`} data-cta="mailen">
            Mail {content.company.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form id="formulier" data-section="formulier" className="grid gap-5" onSubmit={onSubmit} noValidate>
      <Field id="naam" label="Naam" required error={errors.naam}>
        <input id="naam" name="naam" type="text" autoComplete="name" aria-invalid={Boolean(errors.naam)} aria-describedby={errors.naam ? "naam-fout" : undefined} />
      </Field>
      <Field id="telefoon" label="Telefoon" required error={errors.telefoon}>
        <input id="telefoon" name="telefoon" type="tel" inputMode="tel" autoComplete="tel" aria-invalid={Boolean(errors.telefoon)} aria-describedby={errors.telefoon ? "telefoon-fout" : undefined} />
      </Field>
      <Field id="email" label="E-mail" required error={errors.email}>
        <input id="email" name="email" type="email" inputMode="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-fout" : undefined} />
      </Field>
      <Field id="plaats" label="In welke plaats wilt u bouwen?">
        <input id="plaats" name="plaats" type="text" autoComplete="address-level2" />
      </Field>

      <fieldset>
        <legend className="font-semibold">Bouwkavel</legend>
        <div className="mt-1">
          {KAVEL.map((item) => (
            <label key={item.id} className="choice">
              <input type="radio" name="kavel" value={item.id} />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-semibold">Interesse in</legend>
        <div className="mt-1">
          {INTERESSE.map((item) => (
            <label key={item.id} className="choice">
              <input
                type="radio"
                name="interesse"
                value={item.id}
                checked={interesse === item.id}
                onChange={() => setInteresse(item.id)}
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {interesse === "utiliteit" ? (
        <Field id="bedrijf" label="Bedrijfsnaam">
          <input id="bedrijf" name="bedrijf" type="text" autoComplete="organization" />
        </Field>
      ) : null}

      <Field id="opmerking" label="Opmerking">
        <textarea id="opmerking" name="opmerking" />
      </Field>

      <div>
        <label className="choice" htmlFor="privacy">
          <input id="privacy" name="privacy" type="checkbox" value="ja" aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-fout" : undefined} />
          <span>Ik ga akkoord dat Van Pijkeren Bouw deze gegevens gebruikt om contact op te nemen over mijn bouwplan.</span>
        </label>
        {errors.privacy ? (
          <p id="privacy-fout" className="text-[#7F1D1D]">
            {errors.privacy}
          </p>
        ) : null}
        <p className="mt-2 text-lg">
          <Link href="/privacy" className="text-deep-blue underline underline-offset-4">
            Privacyverklaring
          </Link>
          . Op deze conceptsite wordt het formulier niet verzonden.
        </p>
      </div>

      <div>
        <button type="submit" data-cta="offerte" className="btn btn-green w-full sm:w-auto">
          Verstuur bouwplan
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="field" htmlFor={id}>
      <span className="font-semibold">
        {label}
        {required ? <span className="text-deep-green"> (verplicht)</span> : null}
      </span>
      {children}
      {error ? (
        <span id={`${id}-fout`} className="text-[#7F1D1D]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
