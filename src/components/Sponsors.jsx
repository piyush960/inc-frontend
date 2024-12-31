
import { sponsors } from '../constants'
import {InfiniteMovingCards} from './ui/infinite-moving-cards'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import useDimension from '../hooks/useDimension'

const Sponsors = () => {

  const isMobile = useDimension();

  return (
    <div className='h-[50vh] w-full flex flex-col items-center justify-evenly'>
      <motion.div 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.75}}
      >
        <h2 className={`${styles.sectionHeadText}`}>Our Sponsors.</h2>
      </motion.div>
      <InfiniteMovingCards items={sponsors} pauseOnHover={!isMobile}/>
    </div>
  )
} 

export default Sponsors;