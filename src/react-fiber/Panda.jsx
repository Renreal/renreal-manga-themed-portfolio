import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/panda.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[0.053, 0.022, 0]} rotation={[3.031, 0, Math.PI]} scale={0.844} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.black} position={[0, -0.804, -0.826]} rotation={[0.151, 0, 0]} scale={[1.366, 1.507, 1.252]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.black} position={[-0.113, 0.354, 0.333]} scale={0.031} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.black} position={[0.235, 0.344, 0.329]} scale={0.032} />
    </group>
  )
}

useGLTF.preload('/panda.gltf')
