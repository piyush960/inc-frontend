import React from 'react'


import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { FlipWords } from './ui/flip-words'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <p className={`${styles.paddingX} lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] absolute inset-0 mx-auto          top-[19%] w-full max-w-7xl text-center font-light uppercase text-secondary tracking-wide`}>SCTR's Pune Institute of Computer Technology</p>
      <div className='absolute mx-auto inset-0 w-full max-w-6xl h-screen flex flex-col items-center justify-center max-sm:top-[19%] '>
        <h1 className={`w-full ${styles.paddingX} flex flex-row items-center justify-between`}>
          <span className={`${styles.heroHeadText} tracking-wider`}>PICT</span>
          <span className='max-sm:hidden block h-[1px] w-0 mx-14 animate-expand bg-white'></span>
          <span className={`${styles.heroHeadText} tracking-wider`}>2k25</span>
        </h1>
        <FlipWords
          words={["Impetus", "Concepts"]}
          className={`absolute sm:hidden top-[54%] text-lg ml-2 font-bold uppercase`}
        />
      </div>
      <div className='absolute w-[250px] h-[250px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] sm:w-[400px] sm:h-[400px]'>
        <EarthCanvas />
      </div>
    </section>
  )
}

export default Hero