"use client";

import { AnimatePresence, motion, useScroll, Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import {  useRef } from "react";



interface ScalerProps {
  children?: React.ReactNode;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function Scaler({
  children,
  className,
}: ScalerProps) {

  const ref = useRef(null);

  const { scrollYProgress } =useScroll({
    target:ref,
    offset:["0 1" , "1.23 1", ]
  });
  return (
    <div className="flex justify-center space-x-2">
      <AnimatePresence mode="wait">
          <motion.div
            ref={ref}
            style={{ 
              scale: scrollYProgress,
              opacity:scrollYProgress
             }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cn("origin-center drop-shadow-sm", className)}
          >
            {children}
          </motion.div>
      </AnimatePresence>
    </div>
  );
}
