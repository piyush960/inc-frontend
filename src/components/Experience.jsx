
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion'
 
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from "../utils/motion";
import call from "../assets/call.svg"

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color:'#ffffff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div
      className="flex justify-center items-center w-full h-full"
      >
        <img src={experience.icon} alt={experience.company_name} 
        className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <div className="flex flex-row items-center justify-between mt-[-10px]">
        <p className='m-0 text-secondary'>
          {experience.company_name}
        </p>
        <p className='m-0 text-green-500'>
        &#8377;{experience.fees}
        </p>
      </div>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider ">
          {point}
        </li>
      ))}
    </ul>
    <div className="flex flex-row max-sm:items-center items-end justify-start">
      <img src={call} alt="call" className="max-sm:mb-5"/>
      <div className="grid xs:grid-cols-2 grid-cols-1 ml-2 items-baseline sm:space-x-2">
        {experience.contact.map(contact => (
          <p>{contact}</p>
        ))}
      </div>
    </div>
    
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >
          Timeline
        </p>
        <h2 className={styles.sectionHeadText}>Events.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'events')