import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


const ThreeDComponent = () => {
  return (
    <Canvas
      camera={{
        position: [0, 10, 5], 
        fov: 70, 
        near: 0.1, 
        far: 100, 
      }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={true} 
          target={[0, 1, 0]} 
          dampingFactor={0.05} 
          rotateSpeed={0.5} 
        />
      </Suspense>
    </Canvas>
  );
};

export default ThreeDComponent;
