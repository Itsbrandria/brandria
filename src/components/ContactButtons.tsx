
'use client'
import React from 'react'
import { Button } from '@/components/ui/button';
import { Phone, Earth } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DubaiPhone ="+8212412524734"; //TODO: To Be Changed
const EgyptPhone = "+201513125582"; //TODO: To Be Changed

const ourLocation = "https://www.google.com/maps/place/Digital+Brandria/@29.9572821,31.2509199,17z/data=!4m6!3m5!1s0x1458390d3b80e5f5:0x533ade03b5b21cbe!8m2!3d29.9576354!4d31.2527867!16s%2Fg%2F11nwwrmhz1?authuser=0&entry=ttu";

export default function ContactButtons(){
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Phone number copied to clipboard! and it is:' +text);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return(
  <div className="flex flex-col justify-center gap-8 sm:gap-28 px-4 sm:px-0 ">
    <motion.div
    whileHover={{ x:-16 }}>
      <Button 
      onClick={() => copyToClipboard(EgyptPhone)}
      className="flex items-center hover:bg-[#ff0021] hover:text-white py-2 px-3 sm:px-6 text-sm sm:text-base">
        
        <motion.span
        whileHover={{ x:-4 }}
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
        </motion.span>
        <a href={`tel:${EgyptPhone}`}>
        Egypt Phone
        </a>

      </Button>
    </motion.div>

    <motion.div
    whileHover={{ x:-16 }}>
      <Button
      onClick={() => copyToClipboard(DubaiPhone)}
      className="flex items-center hover:bg-[#ff0021] hover:text-white py-2 px-3 sm:px-6 text-sm sm:text-base">
        
        <motion.span
        whileHover={{ x:-4 }}
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
        </motion.span>
        <a href={`tel:${DubaiPhone}`}>
        Dubai Phone
        </a>
      </Button>
    </motion.div>

    <motion.div
    whileHover={{ x:-16 }}>
      <Button  className="flex items-center hover:bg-[#ff0021] hover:text-white py-2 px-3 sm:px-6 text-sm sm:text-base">
        
        <motion.span
        whileHover={{ x:-4 }}
        >
          <Earth className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
        </motion.span>
        <a  target="_blank" href={ourLocation}>
        Our Location
        </a>
      </Button>
    </motion.div>
  </div>
  )
}


