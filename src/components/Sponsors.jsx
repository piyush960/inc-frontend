
import { sponsors } from '../constants'
import {InfiniteMovingCards} from './ui/infinite-moving-cards'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import useDimension from '../hooks/useDimension'
import { Tilt } from 'react-tilt'

import { imocha } from '../assets'

const Sponsors = () => {

  const isMobile = useDimension();

  return (
    <section className='h-full w-full flex flex-col items-center justify-evenly pb-24'>
      <motion.div 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.75}}
      > 
        <p className={`${styles.sectionSubText}`}>Previous Year</p>
        <h2 className={`${styles.sectionHeadText}`}>Sponsors.</h2>
      </motion.div>

      <div className='flex flex-col w-full h-full items-center gap-10 py-16'>
        {
          Object.keys(sponsors).map(obj => (
            <div key={obj} className='flex flex-col gap-8 items-center'>
              <h3 className='text-center text-3xl font-bold capitalize pb-2 border-b-2 border-orange-100'>
                {obj !== 'association' ? obj + " Sponsors" : "In Association With"}
              </h3>
              <div className='flex flex-wrap items-center justify-center gap-8'>
                {
                  sponsors[obj].map(sponsor => (
                    <SponsorCard key={sponsor.name} width={obj === 'title' ? 300 : 250} height={obj === 'title' ? 200 : 150}>
                      <img src={sponsor.src} alt={sponsor.name} className='w-full h-full object-contain'/>
                    </SponsorCard>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      

    </section>
  )
} 

export default Sponsors;

const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          false,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const SponsorCard = ({ children, width=250, height=150 }) => {
  return (
    <Tilt options={{
      reverse:        true,  // reverse the tilt direction
      max:            25,     // max tilt rotation (degrees)
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
      speed:          1000,   // Speed of the enter/exit transition
      transition:     true,   // Set a transition on enter/exit.
      axis:           null,   // What axis should be disabled. Can be X or Y.
      reset:          true,    // If the tilt effect has to be reset on exit.
      easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }} 
    style={{
      width,
      height,
      background: 'linear-gradient(to right, #1746A2, #5F9DF7, #d4621c)',
      padding: 2,
      // boxShadow: '0px 4px 10px 0px rgba(255, 255, 255, 0.8)',
    }}
    >
      <div className='bg-white w-full h-full p-px'>
        {children}
      </div>
    </Tilt>
  )
}