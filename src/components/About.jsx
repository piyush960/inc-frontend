import React from 'react'

import { motion } from 'framer-motion'

import { styles } from '../styles'
import { about_text } from '../constants'
import { textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

import { TextGenerateEffect } from './ui/text-generate-effect'

import { ContainerScroll } from './ui/container-scroll-animation';

const AboutCard = ({index, text, icon}) => {
  return (
    <div className='w-full'
    >
      <div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <TextGenerateEffect words={about_text} /> 
        </div>
      </div>
    </div>
  ) 
}

const About = () => {

  return(
    <>
    <div className='px-1 max-sm:pt-16'>
      <ContainerScroll 
      titleComponent={
      <h2 className={`${styles.sectionSubText}`}>
        What is Impetus and Concepts? <br />
        <span className={`${styles.sectionHeadText}`}>
          About Us.
        </span>
      </h2>
      } 
      children={about_text} 
      />
    </div>
    </>
  )
  
}

export default SectionWrapper(About, "about")