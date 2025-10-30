"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Points, PointMaterial, Stars } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";

function CodeParticles({ mouse, pulse }: { mouse: { x: number; y: number }; pulse: { v: number } }) {
  const ref = useRef<any>(null);

  const materialRef =  useRef<any>(null);
  const positions = useMemo(() => {
    const count = 1500;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - 0.5) * 20;
    return arr;
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    // subtle drift with mouse parallax
    ref.current.rotation.y = mouse.x * 0.2;
    ref.current.rotation.x = mouse.y * 0.15;
    if (materialRef.current) {
      materialRef.current.size = 0.02 + pulse.v * 0.06;
      materialRef.current.needsUpdate = true;
    }
    // decay pulse inside Canvas context
    if (pulse.v > 0.001) pulse.v *= 0.92; else pulse.v = 0;
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          ref={materialRef}
          transparent
          color="#a78bfa"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function CameraRig({ mouse }: { mouse: { x: number; y: number } }) {
  const { camera } = useThree();
  useFrame(() => {
    const targetX = mouse.x * 0.8;
    const targetY = mouse.y * 0.5;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (-targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Background3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const pulse = useRef({ v: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };
    const onClick = () => {
      pulse.current.v = 1; // start pulse
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={["#0b0b12"]} />
        {/* soft stars and code-like particles */}
        <Stars radius={80} depth={50} count={3000} factor={4} fade speed={1} />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6}>
          <CodeParticles mouse={mouse} pulse={pulse.current} />
        </Float>
        <CameraRig mouse={mouse} />
        {/* rim lights for depth */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <directionalLight position={[-5, -3, -2]} intensity={0.3} color="#a78bfa" />
      </Canvas>
    </div>
  );
}


