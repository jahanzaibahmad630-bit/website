"use client";

import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useAppStore } from "@/lib/store";

export default function HeroEmblem() {
  const g = useRef<THREE.Group>(null!);
  const scroll = useAppStore((s) => s.scrollProgress);

  const geom = useMemo(() => {
    // Triangular prism via 3-sided cylinder
    return new THREE.CylinderGeometry(1.0, 1.0, 1.6, 3, 1, false);
  }, []);

  useFrame((state, dt) => {
    if (!g.current) return;

    // “contract/rotate/unfold” feel as scroll progresses
    const t = scroll;

    const targetScale = 1.0 - t * 0.35;
    g.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 1 - Math.pow(0.001, dt));

    g.current.rotation.y += dt * (0.35 + t * 0.9);
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, (t - 0.2) * 0.4, 1 - Math.pow(0.001, dt));

    // float
    g.current.position.y = THREE.MathUtils.lerp(g.current.position.y, 0.15 + Math.sin(state.clock.elapsedTime * 0.8) * 0.06, 0.08);
  });

  return (
    <group ref={g} position={[0, 0.15, 0]}>
      <mesh geometry={geom}>
        <meshPhysicalMaterial
          color={"#000000"}
          metalness={0.2}
          roughness={0.25}
          transmission={0.35}
          thickness={1.5}
          clearcoat={0.9}
          transparent
          opacity={0.22}
        />
        <Edges
          scale={1.001}
          threshold={5}
          color={"rgba(255,255,255,0.75)" as any}
        />
      </mesh>

      {/* inner “A” cut line hint */}
      <lineSegments>
        <edgesGeometry args={[new THREE.TetrahedronGeometry(0.55, 0)]} />
        <lineBasicMaterial color="rgba(255,255,255,0.35)" />
      </lineSegments>
    </group>
  );
}
