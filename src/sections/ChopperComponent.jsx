import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Chopper from "../react-fiber/Chopper.jsx";

const ThreeDComponent = () => {
  return (
    <Canvas
      camera={{
        position: [0, 10, 5], // Move the camera further back
        fov: 70, // More natural perspective
        near: 0.1, 
        far: 100, 
      }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={true} // Keep zoom enabled
          target={[0, 1, 0]} // Focus on Chopper's head
          dampingFactor={0.05} // Smooth controls
          rotateSpeed={0.5} 
        />
        <Chopper />
      </Suspense>
    </Canvas>
  );
};

export default ThreeDComponent;
