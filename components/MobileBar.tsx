import Link from "next/link";
import { content } from "@/content";

export default function MobileBar() {
  const { phoneDisplay, phoneTel } = content.company;
  return (
    <div data-section="mobiele-balk" className="mobiele-balk fixed inset-x-0 bottom-0 z-40 flex border-t border-white/15 bg-ink md:hidden">
      <a
        href={`tel:${phoneTel}`}
        data-cta="bellen"
        className="inline-flex min-h-[52px] flex-1 items-center justify-center px-2 text-center font-display text-[0.95rem] font-bold uppercase leading-tight text-paper"
      >
        Bel {phoneDisplay}
      </a>
      <Link
        href="/bouwplan"
        data-cta="offerte"
        className="inline-flex min-h-[52px] flex-1 items-center justify-center bg-deep-green px-2 text-center font-display text-[0.95rem] font-bold uppercase leading-tight text-white"
      >
        Bouwplan bespreken
      </Link>
    </div>
  );
}
