import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cat from "../react-fiber/Cat.jsx";
const CatComponent = () => {
  return (
    <div className="canvas-wrapper">
    <Canvas
      camera={{
        position: [0, 35, 70], 
        fov: 15,
        near: 0.1,
        far: 10000,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={20} />

      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={true}
          minDistance={100}
          maxDistance={300}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          autoRotate={true}
          autoRotateSpeed={5}
        />
        <Cat />
      </Suspense>
    </Canvas>
    </div>
  );
};

export default CatComponent;
