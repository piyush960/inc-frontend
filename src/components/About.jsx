import React from 'react'

import { motion } from 'framer-motion'

import { styles } from '../styles'
import { about_text } from '../constants'
import { textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

import { TextGenerateEffect } from './ui/text-generate-effect'

import { ContainerScroll } from './ui/container-scroll-animation';
import { p } from 'framer-motion/client'

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

const Text = () => {

  return (
    <p className='text-white-100'>
      <span className='block pb-4'>
      Impetus and Concepts (InC) is a flagship technical event of SCTR's Pune Institute of Computer Technology, Pune, which will be held during the 1st week of April 2024. InC is an intercollegiate international level competition that has been catching the attention of corporate giants for the quality of projects and an opportunity to recruit/mentor young talented budding entrepreneurs.
      </span>
      <span className='block border-t-[1px] border-secondary pt-5 pb-4'>
      Every year InC sets a new benchmark and provides an opportunity for students to realize their ideas into effective products. Over the years, it has become the most popular and awaited event with continuous improvement in footfall, the number and quality of projects/papers, etc. This event also sets a platform for students to design, exhibit, and watch their ideas come true. This technical fest has inventive events namely - Impetus, Concepts, Pradnya.
      </span>
      <span className='block border-t-[1px] border-secondary pt-5'>
      Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains. Concepts is a Project Competition for Final Year Students, all engineering branches confined to specific domains ; and Pradnya - An International Coding Competition. Students are invited with projects addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education, etc. and the best project judged by the juries will be awarded with a cash prize of ₹ 1 Lakh Cash Prize from PICT.
      </span>
    </p>
  )

}
const About = () => {
  return(
    <>
    <div className='md:mt-16 px-5 py-16 overflow-hidden'>
      <ContainerScroll 
      titleComponent={
      <h2 className={`${styles.sectionSubText}`}>
        What is Impetus and Concepts? <br />
        <span className={`${styles.sectionHeadText}`}>
          About Us.
        </span>
      </h2>
      } 
      children={<Text />} 
      />
    </div>
    </>
  )
  
}

export default SectionWrapper(About, "about")