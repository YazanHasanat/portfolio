'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';

function AnimatedBox() {
  const meshRef = useRef<any>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });
  return (
    <Box ref={meshRef as any} args={[2, 2, 2]} scale={2}>
      <MeshDistortMaterial color="#8B5CF6" distort={0.3} speed={2} roughness={0.2} />
    </Box>
  );
}

export default function AnimatedModel() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedBox />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}


