import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const HologramPanels = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[3, 0, 0]}>
      <Panel position={[4, 0, 0]} rotation={[0, -Math.PI / 2, 0]} text="> SYS_BOOT\n> LOAD MODULES\n> OK" />
      <Panel position={[-4, 0, 0]} rotation={[0, Math.PI / 2, 0]} text="> SECURE_LINK\n> ENCRYPTING\n> ESTABLISHED" />
      <Panel position={[0, 0, -4]} rotation={[0, 0, 0]} text="> RENDER_ENG\n> FPS: 60\n> SYNC: TRUE" />
    </group>
  );
};

const Panel = ({ position, rotation, text }) => {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[3, 4]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.05} wireframe={true} />
      </mesh>
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.2}
        color="#00f0ff"
        maxWidth={2.5}
        textAlign="left"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

export default HologramPanels;
