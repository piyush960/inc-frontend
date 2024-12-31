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

import { light, concepts_b, impetus_b, pradnya_b, inc_b, techfiesta_b, concepts_lg, impetus_lg, pradnya_lg, bottom_lg, impetus, concepts, pradnya } from '../assets'

const COLORS_TOP = ["#1746A2", "#5F9DF7", "#FFF7E9", "#D4621C"];

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
      {/* <img src={inc_b} alt="inc_b" className='absolute animate-spin-slow sm:w-28 sm:h-28 w-12 h-12 object-cover pointer-events-none max-sm:bottom-[22%] max-sm:right-[24%] bottom-[27.5%] right-[33%]' onClick={() => handleNavigate('inc')}/>
      <img src={techfiesta_b} alt="techfiesta_b" className='max-sm:hidden absolute animate-wiggle sm:w-28 sm:h-28 w-12 h-12 object-cover cursor-pointer z-10 top-[16%] right-[5%]' onClick={() => handleNavigate('techfiesta')}/> */}
      <p className='absolute sm:left-[50%] top-[11%] sm:translate-x-[-50%] uppercase text-slate-400 font-light text-center text-md sm:text-lg'><span className=''>SCTR's Pune Institute of Computer Technology</span><span className='sm:block text-center'>&nbsp;Presents</span></p>
      <div className='relative max-sm:h-1/2 flex flex-col items-center w-full'>
        <h1 className='relative'>
          <span className='text-white font-bold text-lg sm:text-5xl absolute top-[8%] left-[20%] sm:top-[20%] sm:left-[12%] pointer-events-none'>PICT</span>
          <TextHoverEffect text={'INC'} />
          <span className='text-white font-bold text-lg sm:text-5xl absolute bottom-[18%] right-[20%] sm:bottom-[29%] sm:right-[12%] pointer-events-none'>2K25</span>
        </h1>

        <div className='absolute bottom-[26%] sm:bottom-[14%] w-[70%]'>
          <div className='absolute z-10 sm:w-28 sm:h-28 w-12 h-12 object-cover cursor-pointer bottom-[95%] right-0 group'
          onClick={() => handleNavigate('concepts')}
          >
            <img src={concepts} alt="concepts_logo" className='absolute w-[50%] h-[50%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] group-hover:scale-110 duration-300 object-cover animate-pulse'/>
            <img src={bottom_lg} alt="bottom_light" className='absolute object-cover opacity-70'/>
          </div>

          <div className='absolute z-10 sm:w-28 sm:h-28 w-12 h-12 cursor-pointer bottom-[95%] left-0 group'
          onClick={() => handleNavigate('impetus')}
          >
            <img src={impetus} alt="impetus_logo" className='absolute w-[50%] h-[50%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] group-hover:scale-110 duration-300 object-cover animate-pulse'/>
            <img src={bottom_lg} alt="bottom_light" className='absolute object-cover opacity-70'/>
          </div>

          <div className='absolute z-10 sm:w-28 sm:h-28 w-12 h-12 object-cover cursor-pointer bottom-[95%] left-[50%] translate-x-[-50%] group'
          onClick={() => handleNavigate('pradnya')}
          >
            <img src={pradnya} alt="pradnya_logo" className='absolute w-[50%] h-[50%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] group-hover:scale-110 duration-300 object-cover animate-pulse'/>
            <img src={bottom_lg} alt="bottom_light" className='absolute object-cover opacity-70'/>
          </div>
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
            className="w-full bg-gray-950/10 px-7 py-3 text-white-100 uppercase transition-colors hover:bg-gray-950/50"
          >
            Register Now
          </motion.button>
        </div>

      </div>
      <div className='flex flex-col-reverse max-sm:h-1/2 sm:flex-col sm:justify-center items-center max-sm:-mb-8 sm:mt-10 w-full'>
        <div className='w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]'>
          <IncCanvas />
        </div>
        <ShiftingCountdown />
      </div>
      <div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-[#000609]/0 to-[#000609]" />
    </section>
  )
}

export default Hero

