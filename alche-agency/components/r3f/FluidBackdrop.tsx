"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useMemo } from "react";
import { useAppStore } from "@/lib/store";

import vtx from "@/shaders/fluid.vert.glsl";
import frg from "@/shaders/fluid.frag.glsl";

const FluidMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uResolution: new THREE.Vector2(1, 1),
    uScroll: 0,
    uVelocity: 0
  },
  vtx,
  frg
);

extend({ FluidMaterial });

export default function FluidBackdrop() {
  const { viewport, size } = useThree();
  const mouse = useAppStore((s) => s.mouse);
  const scrollProgress = useAppStore((s) => s.scrollProgress);
  const scrollVelocity = useAppStore((s) => s.scrollVelocity);

  const res = useMemo(() => new THREE.Vector2(size.width, size.height), [size.width, size.height]);

  useEffect(() => {
    res.set(size.width, size.height);
  }, [size.width, size.height, res]);

  useFrame((state) => {
    const mat = (state.scene.getObjectByName("fluid-plane") as any)?.material;
    if (!mat) return;
    mat.uniforms.uTime.value = state.clock.elapsedTime;
    mat.uniforms.uMouse.value.set(mouse.x, mouse.y);
    mat.uniforms.uResolution.value.copy(res);
    mat.uniforms.uScroll.value = scrollProgress;
    mat.uniforms.uVelocity.value = scrollVelocity;
  });

  return (
    <mesh
      name="fluid-plane"
      position={[0, 0, -2.2]}
      scale={[viewport.width, viewport.height, 1]}
      frustumCulled={false}
    >
      <planeGeometry args={[1, 1, 1, 1]} />
      {/* @ts-expect-error extended material */}
      <fluidMaterial transparent={false} depthWrite={false} depthTest={false} />
    </mesh>
  );
}
