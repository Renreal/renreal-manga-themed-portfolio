import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Panda from "../react-fiber/Panda.jsx";

const PandaComponent = () => {
  return (
    <Canvas
    camera={{
      position: [0, 0, -5], //backward view 
      fov: 25, //field view
      near: 0.1, 
      far: 10000, 
    }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={true} 
          dampingFactor={0.05} 
          rotateSpeed={0.5} 
          autoRotate={true}
          autoRotateSpeed={1} 
        />
        <Panda />
      </Suspense>
    </Canvas>
  );
};

export default PandaComponent;
