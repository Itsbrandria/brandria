"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image"
import { cn } from '@/lib/utils';

interface MouseFollowerProps {
  children?: React.ReactNode;
  text?:string;
  className?:string;
}

const MouseFollower: React.FC<MouseFollowerProps> = ({ children , text, className}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    setPosition({ x: clientX - rect.left, y: clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className=" w-full h-full cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {isHovering && (
        <motion.div
          className="absolute w-16 h-16 pointer-events-none z-50"
          initial={{ opacity: 0}}
          animate={{ opacity: 1, x: position.x - 32, y: position.y - 32 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0, ease:"easeInOut" }}
        >

          <motion.div 
          initial={{ opacity: 0, scale:1 }}
          animate={{ opacity: 1 , scale:1.3, }}
          transition={{ duration: 0.6 }}
          className={cn("w-20 h-20 -z-40 flex items-center justify-center rounded-full", className)}>
            <p className='text-center z-30'>
              {text}
            </p>
          </motion.div>

        </motion.div>
      )}

    {children}
    </div>
  );
};

export default MouseFollower;

          {/* <Image           
          src="/Ellipse.svg"
          alt="Mouse Follower"
          width={150}
          height={150}
          loading="eager"
          className='relative w-32 h-32 -z-40'

          /> */}