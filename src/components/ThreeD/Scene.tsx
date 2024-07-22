'use client'

import { Canvas, useThree,useFrame  } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './Model'
import { useProgress, Html, ScrollControls, OrbitControls } from '@react-three/drei'
import { useScroll, useSpring} from 'framer-motion'
import { motion } from 'framer-motion-3d'


function Loader(){
  const { progress, active } = useProgress()
  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {

  const { scrollYProgress } = useScroll({
    offset: ['start', 'end']
  });

  const smoothRotation = useSpring((scrollYProgress) , { damping:10 / 2 });

  return (
    <Canvas>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <pointLight position={[-6, 5, 10] } intensity={100}/>
      <OrbitControls enableZoom={false} />
      <Suspense fallback={<Loader />}>
        <motion.mesh scale={1} rotation-y={smoothRotation} position={[0, -2, -2]}>
          <Model  />
        </motion.mesh>
      </Suspense>
    </Canvas>
  );
}