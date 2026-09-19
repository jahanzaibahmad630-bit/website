"use client";

import DistortedImageCanvas from "@/components/r3f/DistortedImageCanvas";

export default function About() {
  return (
    <section id="about" className="relative min-h-[100svh] py-24">
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="big-title text-[28px] md:text-[40px] tracking-[0.18em]">
              EDITORIAL
              <br />
              SYSTEM
            </h2>
            <div className="mt-4 h-px w-full bg-[var(--line)]" />
            <p className="mt-6 text-[13px] md:text-[14px] text-[var(--muted)] max-w-[56ch]">
              Clean split layouts + brutal typography, with WebGL hover distortions (ripple + chromatic aberration)
              for imagery. Theme inverts here for stark white readability.
            </p>

            <div className="mt-10 mono text-[11px] text-[var(--muted)] space-y-2">
              <div>STACK/ Next.js + R3F + GSAP + Lenis</div>
              <div>RENDER/ Shader-driven, DPR clamped</div>
              <div>UX/ Magnetic cursor, crosshair HUD</div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="hairline overflow-hidden h-[280px] bg-[var(--bg)]/35" data-cursor="hover">
              <DistortedImageCanvas url="/works/01.jpg" />
            </div>
            <div className="hairline overflow-hidden h-[280px] bg-[var(--bg)]/35" data-cursor="hover">
              <DistortedImageCanvas url="/works/02.jpg" />
            </div>
            <div className="md:col-span-2 hairline overflow-hidden h-[320px] bg-[var(--bg)]/35" data-cursor="hover">
              <DistortedImageCanvas url="/works/03.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
