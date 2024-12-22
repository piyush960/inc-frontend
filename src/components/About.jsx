import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

import { TextGenerateEffect } from './ui/text-generate-effect'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("left", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {

  return(
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Impetus and Concepts (InC) is a flagship technical event of SCTR's Pune Institute of Computer Technology (PICT), Pune , which will be held during the 1st week of April 2024. InC is an intercollegiate international level competition that has been catching the attention of corporate giants for the quality of projects and an opportunity to recruit/mentor young talented budding entrepreneurs. Every year InC sets a new benchmark and provides an opportunity for students to realize their ideas into effective products. Over the years, it has become the most popular and awaited event with continuous improvement in footfall, the number and quality of projects/papers, etc. This event also sets a platform for students to design, exhibit, and watch their ideas come true. This technical fest has inventive events namely - Impetus, Concepts, Pradnya.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
  
}

export default SectionWrapper(About, "about")