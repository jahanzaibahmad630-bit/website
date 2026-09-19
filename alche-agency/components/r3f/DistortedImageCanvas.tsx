"use client";

import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState } from "react";

import vtx from "@/shaders/image.vert.glsl";
import frg from "@/shaders/image.frag.glsl";

const ImgMaterial = shaderMaterial(
  {
    uTex: null,
    uTime: 0,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uHover: 0
  },
  vtx,
  frg
);

extend({ ImgMaterial });

function Plane({ url }: { url: string }) {
  const tex = useTexture(url);
  const mat = useRef<any>(null);
  const [hover, setHover] = useState(0);

  const mouse = useMemo(() => new THREE.Vector2(0.5, 0.5), []);

  useFrame((state, dt) => {
    if (!mat.current) return;
    mat.current.uniforms.uTime.value = state.clock.elapsedTime;
    mat.current.uniforms.uTex.value = tex;
    mat.current.uniforms.uHover.value = THREE.MathUtils.damp(
      mat.current.uniforms.uHover.value,
      hover,
      8,
      dt
    );
    mat.current.uniforms.uMouse.value.copy(mouse);
  });

  return (
    <mesh
      onPointerEnter={() => setHover(1)}
      onPointerLeave={() => setHover(0)}
      onPointerMove={(e) => {
        if (e.uv) mouse.set(e.uv.x, e.uv.y);
      }}
    >
      <planeGeometry args={[1, 1, 1, 1]} />
      {/* @ts-expect-error extended material */}
      <imgMaterial ref={mat} />
    </mesh>
  );
}

export default function DistortedImageCanvas({ url }: { url: string }) {
  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 1.6], fov: 45 }}
      >
        <Plane url={url} />
      </Canvas>
    </div>
  );
}
