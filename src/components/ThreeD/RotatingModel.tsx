import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Model from './Model'
import { Mesh } from 'three'

export default function RotatingModel() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.005 // Adjust the speed of rotation as needed


    }
  })

  return (
    <mesh ref={meshRef} scale={3.5} position={[-0.5, -1.2, 0]} rotation={[-0.5,0,0]}>
      <Model />
    </mesh>
  )
}
