import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Shape({ position, geometry, scale = 1, speed = 1, color = "#a855f7" }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.12 * speed;
    ref.current.rotation.y += delta * 0.18 * speed;
  });

  return (
    <Float speed={1.4 * speed} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={40} color="#a855f7" />
        <Suspense fallback={null}>
          <Shape position={[3.6, 1.4, 0]} geometry={<icosahedronGeometry args={[1.1, 0]} />} speed={1} color="#a855f7" />
          <Shape position={[-3.8, -1.2, -1]} geometry={<torusGeometry args={[0.9, 0.28, 16, 64]} />} speed={0.8} color="#c084fc" />
          <Shape position={[-2.8, 2.2, -2]} geometry={<octahedronGeometry args={[0.7, 0]} />} speed={1.3} color="#7c3aed" />
          <Shape position={[4, -2.4, -1.5]} geometry={<tetrahedronGeometry args={[0.8, 0]} />} speed={1.1} color="#d8b4fe" />
        </Suspense>
      </Canvas>
    </div>
  );
}
