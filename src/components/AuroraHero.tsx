import React, { ReactNode, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

interface AuroraHeroProps {
  children: ReactNode;
}
export const AuroraHero : React.FC<AuroraHeroProps> = ({ children }) => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 100% at 50% 0%, #0a0a0a 50%, ${color})`

  useEffect(() => {
    animate(color,COLORS,{
      ease: 'easeInOut',
      duration:10,
      repeat: Infinity,
      repeatType:"mirror"
    })
  },[])

  return (
    <motion.section
    style={{ backgroundImage }}
    className='w-full relative grid min-h-80 place-content-center overflow-hidden bg-black px-4 py-24 text-gray-200 rounded-3xl'>
      <div className='relative z-10 flex flex-col items-center'>
        {children}
      </div>
      <div className='absolute inset-0 z-0'>
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
