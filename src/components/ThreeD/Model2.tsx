import {useGLTF} from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'
import { motion } from 'framer-motion-3d'
import { useScroll } from 'framer-motion'


useGLTF.preload('/vintage_camera.glp')

export default function Model( ) {

  const group = useRef<Group>(null);
  const { nodes, materials, scene } = useGLTF('/vintage_camera.glb')



  return (
    <group ref={group}>
        <primitive object={scene}/>
    </group>
  )
}
