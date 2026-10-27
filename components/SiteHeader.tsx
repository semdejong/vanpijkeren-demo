"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import SleadsBadge from "@/components/SleadsBadge";
import { content } from "@/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const { company, nav } = content;

  function isCurrent(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButton.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        openButton.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function closeMenu() {
    setOpen(false);
    openButton.current?.focus();
  }

  return (
    <header data-section="header" className="sticky top-0 z-40 border-b border-ink/15 bg-white">
      <a href="#inhoud" className="skip">
        Naar inhoud
      </a>
      <div className="mx-auto flex min-h-[4.75rem] w-full max-w-[76rem] items-center gap-3 px-5 py-2">
        <Link href="/" className="shrink-0">
          <Image
            src={company.logo}
            alt="Logo Van Pijkeren Bouw"
            width={2500}
            height={715}
            unoptimized
            loading="eager"
            className="h-auto w-[min(15.5rem,58vw)]"
          />
        </Link>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${company.phoneTel}`}
            data-cta="bellen"
            className="hidden min-h-11 items-center font-mono text-lg text-ink md:inline-flex"
          >
            {company.phoneDisplay}
          </a>
          <Link href="/bouwplan" data-cta="offerte" className="btn btn-green hidden md:inline-flex">
            Bouwplan bespreken
          </Link>
          <button
            ref={openButton}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink/30 px-3 font-mono text-sm uppercase tracking-[0.14em] xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>
      <div className="flex border-t border-ink/15 px-5 py-1 xl:hidden">
        <SleadsBadge />
      </div>
      <nav aria-label="Hoofdmenu" className="hidden border-t border-ink/15 xl:block">
        <ul className="mx-auto flex w-full max-w-[76rem] items-center gap-1 px-5">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={`inline-flex min-h-11 items-center border-b-2 px-3 text-lg text-ink ${
                  isCurrent(item.href) ? "border-ink" : "border-transparent"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-auto">
            <SleadsBadge />
          </li>
        </ul>
      </nav>

      {open ? (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[70] overflow-y-auto bg-paper"
        >
          <div className="mx-auto flex w-full max-w-[76rem] items-center justify-between gap-4 px-5 py-4">
            <SleadsBadge />
            <button
              ref={closeButton}
              type="button"
              className="inline-flex min-h-11 items-center border border-ink/30 px-3 font-mono text-sm uppercase tracking-[0.14em]"
              onClick={closeMenu}
            >
              Sluiten
            </button>
          </div>
          <nav aria-label="Mobiel menu" className="mx-auto w-full max-w-[76rem] px-5 pb-28">
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-t border-ink/15">
                  <Link
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className={`block border-l-4 py-4 pl-3 font-display text-4xl font-extrabold text-ink ${
                      isCurrent(item.href) ? "border-ink" : "border-transparent"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 border-t border-ink/15 pt-6">
              <a className="btn btn-green" href={`tel:${company.phoneTel}`} data-cta="bellen" onClick={closeMenu}>
                Bel {company.phoneDisplay}
              </a>
              <Link className="btn btn-solid" href="/bouwplan" data-cta="offerte" onClick={closeMenu}>
                Bouwplan bespreken
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
