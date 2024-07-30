"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MouseFollowerProps {
  children?: React.ReactNode;
}

const MouseFollower: React.FC<MouseFollowerProps> = ({ children }) => {
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
      className=" w-full h-full "
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {isHovering && (
        <motion.img
          src="/Hand.svg"
          alt="Mouse Follower"
          className="absolute w-16 h-16 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: position.x - 32, y: position.y - 32 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0, ease:"easeInOut" }}
        />
      )}

{children}
    </div>
  );
};

export default MouseFollower;
