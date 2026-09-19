"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { ensureGSAP } from "./gsap";
import { useAppStore } from "./store";

export function useLenisScroll() {
  const setScroll = useAppStore((s) => s.setScroll);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGSAP();

    const lenis = new Lenis({
      duration: 1.12,
      smoothWheel: true,
      wheelMultiplier: 0.9
    });

    let lastY = window.scrollY;
    lenis.on("scroll", () => {
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = y / max;
      const velocity = y - lastY;
      lastY = y;
      setScroll(y, progress, velocity);
      ScrollTrigger.update();
    });

    const onTick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, [setScroll]);
}
