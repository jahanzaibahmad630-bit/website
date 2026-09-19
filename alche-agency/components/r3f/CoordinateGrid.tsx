"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useAppStore } from "@/lib/store";

export default function CoordinateGrid() {
  const lines = useRef<THREE.LineSegments>(null!);
  const mouse = useAppStore((s) => s.mouse);

  const geometry = useMemo(() => {
    const size = 18;
    const step = 1;
    const zLayers = 6;

    const pts: number[] = [];

    for (let zi = 0; zi < zLayers; zi++) {
      const z = -zi * 1.6;

      for (let i = -size; i <= size; i += step) {
        // vertical
        pts.push(i, -size, z, i, size, z);
        // horizontal
        pts.push(-size, i, z, size, i, z);
      }
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  useFrame((_, dt) => {
    if (!lines.current) return;
    const px = (mouse.x - 0.5) * 0.35;
    const py = (mouse.y - 0.5) * 0.25;
    lines.current.position.x += (px - lines.current.position.x) * (1 - Math.pow(0.001, dt));
    lines.current.position.y += (-py - lines.current.position.y) * (1 - Math.pow(0.001, dt));
  });

  return (
    <lineSegments ref={lines} geometry={geometry} position={[0, 0, -2.8]}>
      <lineBasicMaterial color="rgba(255,255,255,0.10)" transparent />
    </lineSegments>
  );
}
