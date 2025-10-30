"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function SparkleField() {
  const ref = useRef<any>();
  const positions = useMemo(() => {
    const count = 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - 0.5) * 14;
    return arr;
  }, []);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.05;
  });
  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial transparent color="#a78bfa" size={0.02} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

function Knot() {
  const ref = useRef<any>();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.25;
    ref.current.rotation.y += delta * 0.15;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]} castShadow>
      <torusKnotGeometry args={[1.1, 0.35, 220, 32]} />
      <meshStandardMaterial color="#c084fc" metalness={0.4} roughness={0.2} />
    </mesh>
  );
}

export default function AboutScene() {
  return (
    <div className="relative w-full h-[520px] md:h-[640px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} shadows>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
          <Knot />
        </Float>
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <SparkleField />
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}


