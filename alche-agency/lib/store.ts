import { create } from "zustand";

type Vec2 = { x: number; y: number };

type AppState = {
  theme: "dark" | "light";
  audioOn: boolean;

  scrollY: number;
  scrollProgress: number;   // 0..1
  scrollVelocity: number;   // Lenis velocity-ish

  mouse: Vec2;              // normalized 0..1 (viewport)
  setTheme: (t: AppState["theme"]) => void;
  toggleTheme: () => void;
  toggleAudio: () => void;

  setScroll: (y: number, progress: number, velocity: number) => void;
  setMouse: (m: Vec2) => void;
};

export const useAppStore = create<AppState>((set) => ({
  theme: "dark",
  audioOn: false,

  scrollY: 0,
  scrollProgress: 0,
  scrollVelocity: 0,

  mouse: { x: 0.5, y: 0.5 },

  setTheme: (t) => set({ theme: t }),
  toggleTheme: () => set((s) => ({ theme: s.theme === "dark" ? "light" : "dark" })),
  toggleAudio: () => set((s) => ({ audioOn: !s.audioOn })),

  setScroll: (y, progress, velocity) => set({ scrollY: y, scrollProgress: progress, scrollVelocity: velocity }),
  setMouse: (m) => set({ mouse: m })
}));
