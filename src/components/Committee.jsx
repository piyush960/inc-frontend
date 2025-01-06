import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { styles } from '../styles';
import { faculty, web, core } from '../constants';
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from './ui/accordian';
import { AnimatedTestimonials } from './ui/animated-committee';
import { cn } from "../lib/utils";
import { IconBrandGithubFilled, IconBrandInstagramFilled, IconBrandLinkedinFilled } from '@tabler/icons-react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const Committee = () => {
	const [activeCommittee, setActiveCommittee] = useState('core');

	const committees = {
		faculty,
		core,
		web,
	};

	const words = [
    {
      text: "Behind ",
    },
    {
      text: "every ",
    },
    {
      text: "triumph ",
    },
    {
      text: "lies ",
    },
    {
      text: "a ",
    },
		{
      text: "resolute ",
    },
		{
      text: "coalition. ",
      className: "text-orange-100",
    },
  ];

	return (
		<section className="py-24 bg-primary w-full flex flex-col items-center">

			<motion.div 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.75}}
      >	
        <h2 className={`${styles.sectionHeadText} flex flex-col sm:-space-y-2 text-white-100 pb-4 px-2 items-center`}>
					<span className='sm:text-[50px] xs:text-[40px] text-[25px] sm:hidden'>
						Behind every triumph lies a resolute coalition.
					</span>
					<TypewriterEffectSmooth words={words} className={'max-sm:hidden'} />
					<span>Meet ours<span className='text-orange-100'>!</span></span>
					</h2>
      </motion.div>


			
			<div className="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4 sm:gap-8 mt-4 mb-16 w-full bg-primary">
				<span className='bg-gradient-to-l from-dark-blue via-light-blue to-orange-100 w-full h-1'></span>
				{Object.keys(committees).map((committee) => (
					<button
						key={committee}
						onClick={() => setActiveCommittee(committee)}
						className={`group/button relative inline-block p-px font-semibold leading-6 text-white-100 shadow-2xl cursor-pointer shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 z-10
							${activeCommittee === committee ? 'bg-tertiary' : 'bg-gray-800'}`}
					>
						<span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-[2px] opacity-0 transition-opacity duration-500 group-hover/button:opacity-100"></span>

						<span className="relative z-10 block px-6 py-2 bg-tertiary">
							<div className="relative z-10 flex items-center space-x-2">
								<span className="transition-all duration-500 group-hover/button:translate-x-1 tracking-wide">
									{committee.toUpperCase()}
								</span>
								<svg
									className="w-6 h-6 transition-transform duration-500 group-hover/button:translate-x-1"
									data-slot="icon"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clipRule="evenodd"
										d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
										fillRule="evenodd"
									></path>
								</svg>
							</div>
						</span>
					</button>
				))}
				<span className='bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 w-full h-1'></span>
			</div>

			<h3 className='text-3xl capitalize font-bold mb-10'>
				{activeCommittee}&nbsp;Committee
			</h3>

			<div className='w-full max-w-[90rem] bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-px'>
				<div className='bg-tertiary md:p-8 px-4 py-8 max-sm:px-2'>
					{ activeCommittee === 'faculty' && <Faculty data={committees[activeCommittee]} /> }
					{ activeCommittee !== 'faculty' && <WebnCore data={committees[activeCommittee]} /> }
				</div>
			</div>
		</section>
	);
};

const Faculty = ({ data: faculty }) => {
	return (
		<Accordion>
			{
				faculty?.map(position => (
				<AccordionItem key={position.value}>
					<AccordionHeader>{position.value}</AccordionHeader>
					<AccordionPanel>
						<ul className='text-white-100 list-disc list-inside'>
						{
							position.names.map((name, index) => (
								<li className='' key={name.value}>{name.value.trim().slice(3)}</li>
							))
						}
						</ul>
					</AccordionPanel>
				</AccordionItem>
				))
			}
		</Accordion>
	)
}

const WebnCore = ({ data }) => {

	const handleLinkClick = (link) => {
		window.open(link, "_blank");
	}

	console.log(data)

	return (
		<div className='flex flex-col items-center w-full gap-[5rem]'>
		{data.map(team => (
			<div className='flex flex-col items-center gap-10'>
			<h3 className='sm:text-3xl text-2xl font-semibold pb-2 border-b-2 border-orange-100'>{team.team}</h3>
			<div className='flex flex-wrap w-full justify-center items-stretch gap-10'>
			{team.members.map(m => (
				<div className='sm:w-[300px] w-[290px]'>
				<BackgroundGradient className="p-4 bg-zinc-900 flex flex-col items-center gap-4">
					<img
						src={m.photo}
						alt="member"
						height="180"
						width="180"
						className="rounded-full"
						/>
					<div>
						<h4 className='text-2xl font-bold text-white-100'>{m.name}</h4>
						<p className='text-sm text-secondary text-center'>{m.post}</p>
					</div>
					<div className='flex items-center gap-4'>
						<IconBrandLinkedinFilled onClick={(e) => handleLinkClick(m.linkedin)} className='cursor-pointer' />
						<IconBrandGithubFilled onClick={(e) => handleLinkClick(m.linkedin)} className='cursor-pointer' />
						<IconBrandInstagramFilled onClick={(e) => handleLinkClick(m.linkedin)} className='cursor-pointer' />
					</div>
				</BackgroundGradient>
			</div>
			))}	
			</div>
			</div>
		))}
		</div>
	)

}

const Core = ({ data: core }) => {

	return (
		<h1>core</h1>
	)

}



export default Committee;


const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    (<div className={cn("relative p-[1px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] opacity-50 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#1746A2,transparent),radial-gradient(circle_farthest-side_at_100%_0,#d4621c,transparent)]"
        )} />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#1746A2,transparent),radial-gradient(circle_farthest-side_at_100%_0,#d4621c,transparent)]"
        )} />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>)
  );
};
