"use client";

import ToggleButton from "./ui/ToggleButton";
import { useAppStore } from "@/lib/store";

export default function Header() {
  const toggleAudio = useAppStore((s) => s.toggleAudio);
  const toggleTheme = useAppStore((s) => s.toggleTheme);

  return (
    <header className="fixed left-0 top-0 z-30 w-full">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4">
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="big-title text-[13px] tracking-[0.28em]"
            data-cursor="hover"
          >
            ALCHE
          </a>
          <div className="hidden md:flex items-center gap-3 text-[11px] mono text-[var(--muted)]">
            <span className="opacity-70">+00.00</span>
            <span className="opacity-70">+35.12</span>
            <span className="opacity-70">Z/</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-[12px] mono">
          {["News", "Works", "About", "stelllla"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="relative text-[var(--fg)]/80 hover:text-[var(--fg)]"
              data-cursor="hover"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ToggleButton label="Contact / Recruit" onClick={() => (window.location.href = "#footer")} />
          <ToggleButton label="Audio" onClick={toggleAudio} variant="ghost" />
          <ToggleButton label="Mode" onClick={toggleTheme} variant="ghost" />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5">
        <div className="h-px w-full bg-[var(--line)]" />
      </div>
    </header>
  );
}
