import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { about_text } from '../constants'
import { zoomIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

import { TextGenerateEffect } from './ui/text-generate-effect'

import { ContainerScroll } from './ui/container-scroll-animation';

const ServiceCard = ({index, text, icon}) => {
  return (
    <Tilt className='w-full' 
    options={{
      max: 20,
      scale: 1,
      speed: 50,
    }}
    >
      <motion.div
        variants={zoomIn(0.25, 0.5)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <TextGenerateEffect words={about_text} /> 
        </div>
      </motion.div>
    </Tilt>
  ) 
}

const About = () => {

  return(
    <>
    <div className='max-sm:hidden'>
      <ContainerScroll 
      titleComponent={
      <h1 className={`${styles.sectionSubText}`}>
        What is Impetus and Concepts? <br />
        <span className={`${styles.sectionHeadText}`}>
          About Us.
        </span>
      </h1>
      } 
      children={<TextGenerateEffect words={about_text} />} 
      />
    </div>
    <div className='sm:hidden'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >
          What is Impetus and Concepts?
        </p>
        <h2 className={styles.sectionHeadText}>About Us.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <ServiceCard  />
      </div>
    </div>
    </>
  )
  
}

export default SectionWrapper(About, "about")