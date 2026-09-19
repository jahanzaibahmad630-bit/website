"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { useAppStore } from "@/lib/store";
import FluidBackdrop from "./FluidBackdrop";
import CoordinateGrid from "./CoordinateGrid";
import HeroEmblem from "./HeroEmblem";
import WorksGallery3D from "./WorksGallery3D";

export default function Experience() {
  const { scene } = useThree();
  const scrollProgress = useAppStore((s) => s.scrollProgress);
  const mouse = useAppStore((s) => s.mouse);

  useMemo(() => {
    scene.background = null;
    scene.fog = null;
  }, [scene]);

  useFrame((state, dt) => {
    // Scroll-synced camera + subtle mouse drift
    const t = scrollProgress;

    const targetZ = 6 - t * 1.0;
    const targetY = t * -1.4;

    state.camera.position.z += (targetZ - state.camera.position.z) * (1 - Math.pow(0.001, dt));
    state.camera.position.y += (targetY - state.camera.position.y) * (1 - Math.pow(0.001, dt));

    const rx = (mouse.y - 0.5) * 0.12;
    const ry = (mouse.x - 0.5) * 0.18;
    state.camera.rotation.x += (rx - state.camera.rotation.x) * (1 - Math.pow(0.001, dt));
    state.camera.rotation.y += (ry - state.camera.rotation.y) * (1 - Math.pow(0.001, dt));
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 6]} intensity={0.7} />

      <FluidBackdrop />
      <CoordinateGrid />
      <HeroEmblem />

      <WorksGallery3D />
    </>
  );
}
