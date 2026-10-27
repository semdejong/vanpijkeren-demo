"use client";

import { useEffect, useRef, useState } from "react";

export default function TapeCounter({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        const from = Math.max(0, value - Math.min(40, value));
        const start = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) * (1 - t);
          setShown(Math.round(from + (value - from) * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        setShown(from);
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-[clamp(3rem,6vw,4.5rem)] font-extrabold leading-none tabular-nums">
      {shown}
    </span>
  );
}
