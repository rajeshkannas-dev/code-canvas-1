import React, { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RoundedBox, Text } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

const Joystick = () => {
  const groupRef = useRef();
  const baseRef = useRef();
  const stickRef = useRef();
  const topRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Slow smooth idle rotation
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.05;
      
      // Mouse interaction
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, (state.pointer.x * 1.5) + 3, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, (state.pointer.y * 1.5), 0.05);
    }
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top center",
          scrub: 1,
        }
      });

      // Break apart animation
      tl.to(baseRef.current.position, { y: -5, x: -5, duration: 1 }, 0)
        .to(stickRef.current.position, { y: 0, x: 0, z: -5, duration: 1 }, 0)
        .to(topRef.current.position, { y: 5, x: 5, duration: 1 }, 0)
        .to(groupRef.current.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 1 }, 0)
        .to(groupRef.current.position, { x: 5, duration: 1 }, 0); 
    });

    return () => ctx.revert();
  }, []);

  return (
    <group ref={groupRef} position={[3, 0, 0]} scale={0.75}>
      
      {/* Floor Glow Rings */}
      <group position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {/* Subtle shadow */}
        <mesh position={[0, 0, -0.05]}>
          <circleGeometry args={[4, 64]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.6} />
        </mesh>
        {/* Inner Cyan Ring */}
        <mesh>
          <ringGeometry args={[2.5, 2.55, 64]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.8} toneMapped={false} />
        </mesh>
        {/* Outer Purple Ring */}
        <mesh>
          <ringGeometry args={[3.2, 3.23, 64]} />
          <meshBasicMaterial color="#6a5cff" transparent opacity={0.5} toneMapped={false} />
        </mesh>
      </group>

      {/* Base */}
      <group ref={baseRef} position={[0, -1.2, 0]}>
        <RoundedBox args={[3.5, 1.2, 3.5]} radius={0.15} smoothness={4}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
        </RoundedBox>

        {/* Text on Base */}
        <Text
          position={[0, 0, 1.76]}
          fontSize={0.25}
          color="#00f0ff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.1}
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf"
        >
          {`< CODE / PLAY >`}
          <meshBasicMaterial color="#00f0ff" toneMapped={false} />
        </Text>
      </group>
      
      {/* Base Accent Ring (Cyan glow where stick meets base) */}
      <mesh position={[0, -0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.08, 16, 64]} />
        <meshBasicMaterial color="#00f0ff" toneMapped={false} />
      </mesh>
      
      {/* Stick */}
      <mesh ref={stickRef} position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 2.8, 32]} />
        <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
      </mesh>
      
      {/* Top Glossy Ball */}
      <mesh ref={topRef} position={[0, 2.6, 0]}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshPhysicalMaterial 
          color="#6a5cff" 
          emissive="#2a106c"
          emissiveIntensity={0.2}
          metalness={0.2} 
          roughness={0.05} 
          clearcoat={1} 
          clearcoatRoughness={0.1}
        />
      </mesh>
    </group>
  );
};

export default Joystick;
