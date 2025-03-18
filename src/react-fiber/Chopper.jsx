import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chopper.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.004, -2.521, -0.12]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.chopperbasic} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.chopperbasic} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.chopperbasic} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.chopperbasic} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.chopperbasic} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.chopperbasic} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.chopperbasic} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.chopperbasic} />
      </group>
      <group position={[-0.004, -2.521, -0.12]}>
        <mesh geometry={nodes.Object_15.geometry} material={materials.outline} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.outline} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.outline} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.outline} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.outline} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.outline} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.outline} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.outline} />
      </group>
      <group position={[0, -7.317, -1.065]} scale={9.622}>
        <mesh geometry={nodes.Object_24.geometry} material={materials.nieve} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.nieve} />
      </group>
      <mesh geometry={nodes.Object_13.geometry} material={materials['Material.background']} position={[0, -7.317, -1.065]} scale={9.622} />
    </group>
  )
}

useGLTF.preload('/chopper.gltf')
