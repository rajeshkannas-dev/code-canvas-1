import React, { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Joystick = () => {
  const groupRef = useRef();
  const baseRef = useRef();
  const stickRef = useRef();
  const topRef = useRef();

  useFrame((state) => {
    // Idle rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Mouse interaction (offset by 3 to stay on the right side)
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, (state.pointer.x * 2) + 3, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, (state.pointer.y * 2), 0.05);
    }
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#services-section",
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
        .to(groupRef.current.position, { x: 5, duration: 1 }, 0); // Move to right on services section
    });

    return () => ctx.revert();
  }, []);

  return (
    <group ref={groupRef} position={[3, 0, 0]}>
      {/* Base */}
      <mesh ref={baseRef} position={[0, -1.5, 0]}>
        <boxGeometry args={[3, 1, 3]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Base Accent Ring */}
      <mesh position={[0, -0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.05, 16, 32]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
      </mesh>
      
      {/* Stick */}
      <mesh ref={stickRef} position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 3, 16]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Top */}
      <mesh ref={topRef} position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#6a5cff" emissive="#6a5cff" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

export default Joystick;
