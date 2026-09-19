"use client";

import { Canvas } from "@react-three/fiber";
import { clampDpr } from "@/lib/clampDpr";
import Experience from "./r3f/Experience";

export default function SceneCanvas() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        dpr={(dpr) => clampDpr(dpr, 1, 1.75)}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        camera={{ position: [0, 0, 6], fov: 42, near: 0.1, far: 100 }}
        eventSource={typeof document !== "undefined" ? document.body : undefined}
      >
        <Experience />
      </Canvas>
    </div>
  );
}
