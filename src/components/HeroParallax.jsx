import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IncCanvas, StarsCanvas } from './canvas'
import { 
  useMotionTemplate,
  useMotionValue,
  motion,
  animate, } from 'framer-motion'
import { TextHoverEffect } from "./ui/text-hover-effect";
import ShiftingCountdown from './ui/countdown';

import { light, concepts_b, impetus_b, pradnya_b, inc_b, techfiesta_b } from '../assets'

const COLORS_TOP = ["#1746A2", "#5F9DF7", "#FFF7E9", "#D4621C"];

const Hero = () => {

  const color = useMotionValue(COLORS_TOP[0]);
  const [isAnimeComplete, setIsAnimeComplete] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const handleNavigate = (src) => {
    if(src==='inc'){
      return
    }
    else if(src==='techfiesta'){
      window.open('https://techfiesta.pict.edu/', '_blank');
    }
    else navigate(`/events/${src}`);
  }

  return (
    <section className={`relative sm:px-12 px-6 w-full h-screen mx-auto flex flex-col-reverse overflow-hidden sm:flex-row items-center sm:justify-between bg-grid-orange-100/[0.2] max-sm:pt-10`}>
      <img src={light} alt="light" className='absolute object-cover pointer-events-none top-[-10%] right-[50vw] max-sm:translate-x-[50%] sm:right-[8%] z-10 opacity-35'/>
      <img src={inc_b} alt="inc_b" className='absolute animate-spin-slow sm:w-28 sm:h-28 w-12 h-12 object-cover pointer-events-none max-sm:bottom-[22%] max-sm:right-[24%] bottom-[27.5%] right-[33%]' onClick={() => handleNavigate('inc')}/>
      <img src={techfiesta_b} alt="techfiesta_b" className='max-sm:hidden absolute animate-wiggle sm:w-28 sm:h-28 w-12 h-12 object-cover cursor-pointer z-10 top-[16%] right-[5%]' onClick={() => handleNavigate('techfiesta')}/>
      <p className='absolute sm:left-[50%] top-[11%] sm:translate-x-[-50%] uppercase text-slate-400 font-light text-center text-md sm:text-lg'><span className=''>SCTR's Pune Institute of Computer Technology</span><span className='sm:block text-center'>&nbsp;Presents</span></p>
      <div className='relative max-sm:h-1/2 flex flex-col max-sm:-space-y-4 items-center sm:mt-12'>
        <img src={concepts_b} alt="concepts_b" className='absolute z-10 animate-pulse sm:w-28 sm:h-28 w-12 h-12 object-cover cursor-pointer max-sm:bottom-[73%] max-sm:right-[12%] bottom-[47.5%] right-[5%]' onClick={() => handleNavigate('concepts')}/>
        <img src={impetus_b} alt="impetus_b" className='absolute z-10 animate-pulse sm:w-28 sm:h-28 w-12 h-12 object-cover cursor-pointer max-sm:bottom-[53.5%] max-sm:left-[16.5%] bottom-[25%] left-[8.5%]' onClick={() => handleNavigate('impetus')}/>
        <img src={pradnya_b} alt="pradnya_b" className='absolute z-10 animate-bounce sm:w-28 sm:h-28 w-12 h-12 object-cover cursor-pointer max-sm:top-0 top-[15.5%] left-[44%]' onClick={() => handleNavigate('pradnya')}/>
        <h1 className='relative'>
          <span className='text-white font-bold text-lg sm:text-5xl absolute top-[8%] left-[20%] sm:top-[20%] sm:left-[12%] pointer-events-none'>PICT</span>
          <TextHoverEffect text={'INC'} />
          <span className='text-white font-bold text-lg sm:text-5xl absolute bottom-[18%] right-[20%] sm:bottom-[29%] sm:right-[12%] pointer-events-none'>2K25</span>
        </h1>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="sm:absolute sm:bottom-[22%] bg-gray-950/10 px-7 py-3 text-white-100 uppercase transition-colors hover:bg-gray-950/50"
        >
          Register Now
        </motion.button>
      </div>
      <div className='flex flex-col-reverse max-sm:h-1/2 sm:flex-col sm:justify-center items-center sm:mt-10'>
        <div className='w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]'>
          <IncCanvas />
        </div>
        <motion.div 
        initial={{ scale: 2, y: '-150%', x: '-100%' }}
        animate={{ scale: 1, x: 0, y: 0}}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 2
        }}
        onAnimationComplete={() => setIsAnimeComplete(true)}
        className='w-full max-sm:hidden z-20'>
          <ShiftingCountdown isAnimeComplete={isAnimeComplete} />
        </motion.div>
      </div>
      <div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-[#000609]/0 to-[#000609]" />
    </section>
  )
}

export default Hero

