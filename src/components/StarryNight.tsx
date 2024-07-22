import React, { ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

interface StarryNightProps {
  children: ReactNode;
}

export const StarryNight: React.FC<StarryNightProps> = ({ children }) => {
  return (
    <section className='relative overflow-hidden h-full w-full'>
      <div className='z-10 h-full w-full'>
        {children}
      </div>
      <div className='absolute inset-0 z-0'>
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </section>
  );
};
