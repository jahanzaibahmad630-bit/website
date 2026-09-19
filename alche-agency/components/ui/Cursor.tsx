"use client";

import { useEffect, useRef } from "react";
import { ensureGSAP } from "@/lib/gsap";
import { useAppStore } from "@/lib/store";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const setMouse = useAppStore((s) => s.setMouse);

  useEffect(() => {
    const { gsap } = ensureGSAP();
    const d = dot.current!;
    const r = ring.current!;

    const qx = gsap.quickTo(d, "x", { duration: 0.18, ease: "power3.out" });
    const qy = gsap.quickTo(d, "y", { duration: 0.18, ease: "power3.out" });
    const rx = gsap.quickTo(r, "x", { duration: 0.28, ease: "power3.out" });
    const ry = gsap.quickTo(r, "y", { duration: 0.28, ease: "power3.out" });

    function onMove(e: PointerEvent) {
      qx(e.clientX);
      qy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);

      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    }

    function onOver(e: Event) {
      const t = e.target as HTMLElement;
      if (t?.closest?.("[data-cursor='hover']")) {
        gsap.to(r, { scale: 1.8, duration: 0.22, ease: "power2.out" });
        gsap.to(d, { scale: 0.9, duration: 0.22 });
      }
    }

    function onOut(e: Event) {
      const t = e.target as HTMLElement;
      if (t?.closest?.("[data-cursor='hover']")) {
        gsap.to(r, { scale: 1.0, duration: 0.22, ease: "power2.out" });
        gsap.to(d, { scale: 1.0, duration: 0.22 });
      }
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, true);
    window.addEventListener("pointerout", onOut, true);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver, true);
      window.removeEventListener("pointerout", onOut, true);
    };
  }, [setMouse]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden md:block">
      <div
        ref={ring}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-[var(--line)]"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dot}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-[var(--fg)]/80"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
