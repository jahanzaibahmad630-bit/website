"use client";

import { Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useAppStore } from "@/lib/store";

const items = [
  { url: "/works/01.jpg" },
  { url: "/works/02.jpg" },
  { url: "/works/03.jpg" }
];

export default function WorksGallery3D() {
  const g = useRef<THREE.Group>(null!);
  const scroll = useAppStore((s) => s.scrollProgress);

  const positions = useMemo(() => items.map((_, i) => i * 2.2), []);

  useFrame((_, dt) => {
    if (!g.current) return;

    // Only noticeably moves around mid-scroll
    const t = THREE.MathUtils.smoothstep(scroll, 0.18, 0.72);
    const targetX = -t * (items.length - 1) * 2.2;

    g.current.position.x += (targetX - g.current.position.x) * (1 - Math.pow(0.001, dt));
    g.current.position.y = -0.55;
    g.current.position.z = 0.2;
  });

  return (
    <group ref={g} position={[0, -0.55, 0.2]}>
      {items.map((it, i) => (
        <group key={it.url} position={[positions[i], 0, 0]}>
          <Image
            url={it.url}
            transparent
            scale={[1.6, 0.95, 1]}
            toneMapped={false}
            position={[0, 0, 0]}
          />
          <mesh position={[0, 0, -0.01]} scale={[1.62, 0.97, 1]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial color="rgba(255,255,255,0.06)" transparent />
          </mesh>
        </group>
      ))}
    </group>
  );
}
