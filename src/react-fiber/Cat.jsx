import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cat.gltf')
  return (
    <group {...props} dispose={null} position={[0, -7, 0]}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.dingus_dingus_0.geometry} material={materials.dingus} />
          <mesh geometry={nodes.dingus_whiskers_0.geometry} material={materials.whiskers} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cat.gltf')
