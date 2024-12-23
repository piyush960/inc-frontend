
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { sponsors } from '../constants'
import {InfiniteMovingCards} from './ui/infinite-moving-cards'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import useDimension from '../hooks/useDimension'

const Tech = () => {

  const isMobile = useDimension();

  return (
    <div className='h-screen w-full flex flex-col items-center justify-evenly'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Our Sponsors.</h2>
      </motion.div>
      <InfiniteMovingCards items={sponsors} pauseOnHover={!isMobile}/>
    </div>
  )
} 

export default Tech;