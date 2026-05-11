import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const HologramPanels = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[3, 0, 0]} scale={0.8}>
      <WebDevPanel position={[4, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <ReactPanel position={[-4, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <PythonPanel position={[0, 0, -4]} rotation={[0, 0, 0]} />
    </group>
  );
};

const PanelBackground = () => {
  const edges = useMemo(() => new THREE.EdgesGeometry(new THREE.PlaneGeometry(3, 4)), []);
  return (
    <>
      <mesh>
        <planeGeometry args={[3, 4]} />
        <meshPhysicalMaterial 
          color="#ffffff" 
          emissive="#00d0ff"
          emissiveIntensity={0.1}
          transparent 
          opacity={0.05} 
          roughness={0.1}
          metalness={0.1}
          clearcoat={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#00d0ff" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
};

const WebDevPanel = ({ position, rotation }) => {
  const [text, setText] = useState("");
  const fullText = "<section>\n  <h1 class=\"title\">\n    Code Canvas\n  </h1>\n  <p>\n    Loading...\n  </p>\n</section>";

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const loopDuration = 5;
    const progress = (t % loopDuration) / 2.5; // type over 2.5s
    const charsToShow = Math.floor(Math.max(0, Math.min(1, progress)) * fullText.length);
    setText(fullText.substring(0, charsToShow) + (Math.floor(t * 4) % 2 === 0 ? "_" : ""));
  });

  return (
    <group position={position} rotation={rotation}>
      <PanelBackground />
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.18}
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

const ReactPanel = ({ position, rotation }) => {
  const [text, setText] = useState("");
  const fullText = "import { Canvas } from 'r3f';\n\nconst App = () => {\n  const [glowing, setGlow] =\n    useState(true);\n  return <Canvas />;\n};";

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const loopDuration = 5.5;
    const progress = (t % loopDuration) / 3; // type over 3s
    const charsToShow = Math.floor(Math.max(0, Math.min(1, progress)) * fullText.length);
    setText(fullText.substring(0, charsToShow) + (Math.floor(t * 4) % 2 === 0 ? "|" : ""));
  });

  return (
    <group position={position} rotation={rotation}>
      <PanelBackground />
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.16}
        color="#00f0ff"
        maxWidth={2.6}
        textAlign="left"
        anchorX="center"
        anchorY="middle"
        lineHeight={1.4}
      >
        {text}
      </Text>
    </group>
  );
};

const PythonPanel = ({ position, rotation }) => {
  const [text, setText] = useState("");
  const fullText = "def init_ai_model():\n    model = NeuralNet()\n    model.load_weights()\n    while True:\n        data = stream.read()\n        model.predict(data)";

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const loopDuration = 6;
    const progress = (t % loopDuration) / 3.5; // type over 3.5s
    const charsToShow = Math.floor(Math.max(0, Math.min(1, progress)) * fullText.length);
    setText(fullText.substring(0, charsToShow) + (Math.floor(t * 4) % 2 === 0 ? "█" : ""));
  });

  return (
    <group position={position} rotation={rotation}>
      <PanelBackground />
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.16}
        color="#00f0ff"
        maxWidth={2.6}
        textAlign="left"
        anchorX="center"
        anchorY="middle"
        lineHeight={1.4}
      >
        {text}
      </Text>
    </group>
  );
};

export default HologramPanels;
