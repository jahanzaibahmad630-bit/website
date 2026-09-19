"use client";

import { useEffect, useRef } from "react";
import { ensureGSAP } from "@/lib/gsap";

const WORKS = [
  {
    title: "KizunaAI 'Hello, Fortnite'",
    tags: ["Fortnite", "Metaverse", "Realtime"],
    date: "2024-11",
    desc: "Interactive world activation with realtime pipeline + cinematic UX.",
  },
  {
    title: "DISCOAT 2025SS Exhibition in Virtual",
    tags: ["WebGL", "Three.js", "Virtual Expo"],
    date: "2025-03",
    desc: "Architectural virtual exhibition with editorial motion system.",
  },
  {
    title: "Fortnite Creative Works",
    tags: ["UEFN", "Fortnite", "Systems"],
    date: "2025-06",
    desc: "Tooling + content pipeline for repeatable interactive builds.",
  }
];

export default function Works() {
  const rail = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGSAP();
    const r = rail.current;
    const w = wrap.current;
    if (!r || !w) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-work-card]");
      const total = cards.length;

      const tween = gsap.to(r, {
        xPercent: -100 * (total - 1),
        ease: "none",
        scrollTrigger: {
          trigger: w,
          start: "top top",
          end: () => `+=${w.offsetWidth * 1.6}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      return () => tween.kill();
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section id="works" ref={wrap} className="relative min-h-[100svh] tech-grid">
      <div className="mx-auto max-w-[1400px] px-5 pt-24">
        <div className="flex items-end justify-between">
          <h2 className="big-title text-[28px] md:text-[40px] tracking-[0.18em]">FEATURED</h2>
          <div className="mono text-[11px] text-[var(--muted)]">
            SLIDE/ HORIZONTAL — SCROLL
          </div>
        </div>
        <div className="mt-4 h-px w-full bg-[var(--line)]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-5">
        <div className="mt-10 overflow-hidden">
          <div ref={rail} className="flex gap-6 will-change-transform">
            {WORKS.map((w, i) => (
              <article
                key={w.title}
                data-work-card
                data-cursor="hover"
                className="relative min-w-[78vw] md:min-w-[56vw] lg:min-w-[42vw] hairline p-6 md:p-7 bg-[var(--bg)]/55 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="mono text-[11px] text-[var(--muted)]">{w.date}</div>
                    <h3 className="mt-2 big-title text-[18px] md:text-[22px] tracking-[0.12em]">
                      {w.title}
                    </h3>
                  </div>
                  <div className="crosshair h-7 w-7 opacity-80" />
                </div>

                <p className="mt-4 text-[13px] text-[var(--muted)] max-w-[52ch]">
                  {w.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="mono text-[10px] px-2 py-1 hairline bg-[var(--fg)]/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 h-[160px] md:h-[210px] w-full hairline relative overflow-hidden">
                  <div className="absolute inset-0 tech-grid opacity-70" />
                  <div className="absolute left-3 top-3 mono text-[10px] text-[var(--muted)]">
                    PREVIEW / {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
