import { useRef, useMemo, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import earth8k from "@/assets/earth-8k.jpg";

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  
  const earthTexture = useLoader(THREE.TextureLoader, earth8k);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0008;
    }
  });

  // Set initial rotation to show Europe
  useEffect(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y = -0.5; // Rotate to show Europe
    }
  }, []);

  return (
    <group>
      {/* Earth with NASA 8K texture */}
      <Sphere ref={earthRef} args={[2.5, 128, 128]}>
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.85}
          metalness={0.02}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere args={[2.65, 64, 64]}>
        <meshBasicMaterial
          color="#66FCF1"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

const Stars = () => {
  const starsRef = useRef<THREE.Points>(null);

  const starsGeometry = useMemo(() => {
    const count = 8000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 40 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const starsMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#ffffff",
        size: 0.15,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
      }),
    []
  );

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.00005;
    }
  });

  return <points ref={starsRef} geometry={starsGeometry} material={starsMaterial} />;
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);

  const particlesGeometry = useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 4 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  const particlesMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#66FCF1",
        size: 0.015,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      }),
    []
  );

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0002;
      particlesRef.current.rotation.x += 0.00008;
    }
  });

  return <points ref={particlesRef} geometry={particlesGeometry} material={particlesMaterial} />;
};

const EarthHero = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#000000]">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 3, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-3, -2, -3]} intensity={0.8} color="#4a7c9e" />
        <pointLight position={[10, 5, 5]} intensity={1.2} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Stars />
          <Earth />
        </Suspense>
        
        <Particles />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/75 to-background pointer-events-none" />
    </div>
  );
};

export default EarthHero;
