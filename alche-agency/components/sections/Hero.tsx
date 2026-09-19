"use client";

import { useEffect, useRef } from "react";
import { ensureGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGSAP();
    const el = root.current;
    if (!el) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      el.querySelectorAll("[data-reveal]"),
      { y: 24, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.05, stagger: 0.08 }
    );

    return () => tl.kill();
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] pt-24">
      <div className="mx-auto max-w-[1400px] px-5">
        <div ref={root} className="relative">
          {/* HUD / coordinate marks */}
          <div className="flex items-center justify-between text-[11px] mono text-[var(--muted)]">
            <div className="flex items-center gap-3">
              <span className="crosshair inline-block h-5 w-5" />
              <span>COORD/ 35.12N</span>
              <span className="hidden sm:inline">SYS/ READY</span>
            </div>
            <div className="hidden sm:flex gap-3">
              <span>FPS/ 60</span>
              <span>GL/ OK</span>
              <span>SCROLL/ ACTIVE</span>
            </div>
          </div>

          <div className="mt-10 md:mt-16">
            <h1 className="masked-title big-title leading-[0.9] text-[clamp(56px,10vw,128px)]">
              <span data-reveal className="block">ALCHE</span>
              <span data-reveal className="block opacity-80">WORKS</span>
            </h1>

            <div className="mt-6 max-w-[62ch] text-[13px] md:text-[14px] text-[var(--muted)]">
              <p data-reveal>
                An interactive 3D portfolio system: wireframe emblem, fluid chromatic shader,
                scroll-synced camera, and brutalist editorial layout.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="#works"
                className="hairline mono px-4 py-3 text-[11px] hover:bg-[var(--fg)]/10 transition"
                data-cursor="hover"
              >
                ENTER WORKS →
              </a>
              <span className="mono text-[11px] text-[var(--muted)]">
                + drag / hover elements
              </span>
            </div>
          </div>

          {/* subtle grid overlay */}
          <div className="pointer-events-none mt-16 h-[1px] w-full bg-[var(--line)]" />
        </div>
      </div>
    </section>
  );
}
