import * as THREE from 'three'
// import { useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls, Environment, ContactShadows } from '@react-three/drei'
// import { FaMapMarkerAlt } from 'react-icons/fa'


const texture = new THREE.TextureLoader().load('/2k_earth_nightmap.jpg')

export default function Viewer() {
  return (
    <Canvas camera={{ position: [55, 0, 0], fov: 50 }}>
      <ambientLight intensity={0.1} />
      <Environment background near={1} far={1000} resolution={256}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.1} />
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>
      </Environment>
      {/* <Model position={[0, 0.25, 0]} /> */}
      {/* <Environment preset="night" /> */}
      <ContactShadows frames={1} scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" />
      <OrbitControls />
    </Canvas>
  )
}
