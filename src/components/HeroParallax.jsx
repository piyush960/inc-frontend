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

import { light, concepts_b, impetus_b, pradnya_b } from '../assets'
import HeroSlider from './HeroSlider';

const COLORS_TOP = ["#1746A2", "#D4621C"];

const Hero = () => {

  const color = useMotionValue(COLORS_TOP[0]);
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

  return (
    <section className='relative w-full h-screen'>
      <div className='absolute inset-0'>
        <HeroSlider />
      </div>
    <div className='relative sm:px-12 px-6 mx-auto w-full h-full flex flex-col-reverse overflow-hidden sm:flex-row items-center sm:justify-around bg-dot-secondary/[0.25] max-sm:pt-10'>

      <img src={light} alt="light" className='absolute object-cover pointer-events-none top-[-8%] translate-x-[50%] right-[50%] z-10 opacity-35 sm:hidden'/>

      <p className='absolute sm:left-[50%] top-[11%] sm:translate-x-[-50%] uppercase text-slate-400 font-light text-center text-md sm:text-lg'><span className=''>SCTR's Pune Institute of Computer Technology</span><span className='sm:block text-center'>&nbsp;Presents</span></p>

      <div className='relative max-sm:h-[350px] max-sm:w-[350px] flex flex-col items-center w-[600px]'>

        <img src={impetus_b} alt="impetus_logo" className='sm:w-24 sm:h-24 w-11 h-11 absolute bottom-[45.5%] left-[17%] sm:bottom-[26%] sm:left-[-4%] z-10 cursor-pointer hover:scale-105 duration-300 opacity-70 hover:opacity-100' onClick={() => navigate('/events/impetus')}/>

        <img src={pradnya_b} alt="impetus_logo" className='sm:w-24 sm:h-24 w-11 h-11 absolute left-[44%] top-[4.8%] sm:top-[18.8%] sm:left-[42%] z-10 cursor-pointer hover:scale-105 duration-300 opacity-70 hover:opacity-100' onClick={() => navigate('/events/pradnya')}/>

        <img src={concepts_b} alt="impetus_logo" className='sm:w-24 sm:h-24 w-9 h-9 absolute top-[25%] right-[15%] sm:top-[41.6%] sm:right-[-8%] rotate-[18deg] z-10 cursor-pointer opacity-70 hover:opacity-100 hover:scale-105 duration-300' onClick={() => navigate('/events/concepts')}/>
        
        <h1 className='relative mt-4'>
          <span className='text-white font-bold text-lg sm:text-5xl absolute top-[8%] left-[20%] sm:top-[20%] sm:left-[11.3%] pointer-events-none'>PICT</span>
          <TextHoverEffect text={'INC'} />
          <span className='text-white font-bold text-lg sm:text-5xl absolute bottom-[18%] right-[20%] sm:bottom-[29%] sm:right-[12%] pointer-events-none'>2K25</span>
        </h1>

        <div className='absolute bottom-[26%] sm:bottom-[14%] w-[60%] sm:w-[100%]'>
          <motion.button
            style={{
              border,
              // boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="w-full tracking-widest bg-[#000609]/50 px-7 py-3 text-white-100 uppercase transition-colors hover:bg-[#000609]/60"
            onClick={() => {navigate(`/register`)}}
          >
            Register Now
          </motion.button>
        </div>

      </div>
      <div className='flex flex-[0.65] flex-col-reverse max-sm:h-1/2 sm:flex-col sm:justify-center items-center max-sm:-mb-8 sm:mt-10 xl:-mr-9 relative'>
        <img src={light} alt="light" className='absolute object-cover pointer-events-none top-[-27%] translate-x-[50%] right-[50%] z-10 opacity-35 max-sm:hidden'/>
        <div className='w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] relative'>
          <IncCanvas />
        </div>
        <ShiftingCountdown />
      </div>
    </div>
    <div className="absolute left-0 top-0 bottom-0 sm:w-10 w-4 bg-gradient-to-l from-[#000609]/0 to-[#000609]" />
    <div className="absolute bottom-0 top-0 right-0 sm:w-10 w-4 bg-gradient-to-r from-[#000609]/0 to-[#000609]" />
    <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-b from-[#000609]/0 to-[#000609]" />
  </section>
  )
}

export default Hero

