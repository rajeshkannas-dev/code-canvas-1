import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import Joystick from './Joystick';
import HologramPanels from './HologramPanels';

const CanvasContainer = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={[0, -0.5, 0]}>
              <Joystick />
              <HologramPanels />
            </group>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
