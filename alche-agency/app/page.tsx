"use client";

import { useEffect } from "react";
import { useLenisScroll } from "@/lib/lenis";
import { ensureGSAP } from "@/lib/gsap";
import { useAppStore } from "@/lib/store";

import SceneCanvas from "@/components/SceneCanvas";
import Header from "@/components/Header";
import Cursor from "@/components/ui/Cursor";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";

export default function Page() {
  useLenisScroll();
  const theme = useAppStore((s) => s.theme);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Contrast inversion at waypoints (black -> white -> black)
  useEffect(() => {
    const { ScrollTrigger } = ensureGSAP();

    const toLight = ScrollTrigger.create({
      trigger: "#about",
      start: "top 55%",
      end: "bottom 45%",
      onEnter: () => document.documentElement.setAttribute("data-theme", "light"),
      onEnterBack: () => document.documentElement.setAttribute("data-theme", "light"),
      onLeave: () => document.documentElement.setAttribute("data-theme", "dark"),
      onLeaveBack: () => document.documentElement.setAttribute("data-theme", "dark")
    });

    return () => toLight.kill();
  }, []);

  return (
    <main className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <SceneCanvas />
      <NoiseOverlay />
      <Cursor />

      <Header />

      <div className="relative z-10">
        <Hero />
        <Works />
        <About />
        <Footer />
      </div>
    </main>
  );
}
