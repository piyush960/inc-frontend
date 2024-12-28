import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IncCanvas } from "./canvas";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const HeroParallax = () => {
  return (
    <div className="bg-primary">
      <TextParallaxContent
        imgUrl="/src/assets/bg4.png"
				/>
    </div>
  );
};

const IMG_PADDING = 0

const TextParallaxContent = ({ imgUrl }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
				<StickyImage imgUrl={imgUrl} />
				<Text />
				<OverlayCopy />
      </div>
    </div>
  );
};

const Text = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

	return (
    <motion.h1
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute mx-auto inset-0 left-0 top-0 flex flex-row items-center justify-between w-full max-w-5xl  h-screen overflow-hidden"
    >
      <p className="text-white-100 text-4xl font-bold md:text-7xl">{`PICT`}</p>
      <span className='max-sm:hidden block h-[1px] w-0 mx-14 animate-expand bg-white-100'></span>
      <p className="text-white-100 text-4xl font-bold md:text-7xl">{`2k25`}</p>
    </motion.h1>
  );
};


const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.60]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          opacity,
        }}
      />
			<div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-[#000609]/0 to-[#000609]" />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
		style={{
			y,
			opacity,
		}}
		ref={targetRef}
		className="absolute inset-0 h-screen flex flex-col justify-center items-center overflow-hidden"
	>
		<div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]">
			<IncCanvas />
		</div>
	</motion.div>
  );
};
