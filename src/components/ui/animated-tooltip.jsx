import React, { useState } from "react";
import {
	motion,
	useTransform,
	AnimatePresence,
	useMotionValue,
	useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
	items
}) => {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0);
	const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
	const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
	const handleMouseMove = (event) => {
		const halfWidth = event.target.offsetWidth / 2;
		x.set(event.nativeEvent.offsetX - halfWidth);
	};

	return (
		<div className="flex flex-wrap justify-center items-center gap-16">
			{items.map((item, idx) => (
				<div
					className="relative group"
					key={item.name}
					onMouseEnter={() => setHoveredIndex(item.id)}
					onMouseLeave={() => setHoveredIndex(null)}>
					<AnimatePresence mode="popLayout">
						{hoveredIndex === item.id && (
							<motion.div
								initial={{ opacity: 0, y: 20, scale: 0.6 }}
								animate={{
									opacity: 1,
									y: 0,
									scale: 1,
									transition: {
										type: "spring",
										stiffness: 260,
										damping: 10,
									},
								}}
								exit={{ opacity: 0, y: 20, scale: 0.6 }}
								style={{
									translateX: translateX,
									rotate: rotate,
									whiteSpace: "nowrap",
								}}
								className="absolute -top-20 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center bg-black z-50 shadow-xl px-4 py-2">
								<div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
								<div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
								<div className="font-bold text-white relative z-30 text-xl">
									{item.name}
								</div>
								<div className="text-white text-sm">{item.designation}</div>
							</motion.div>
						)}
					</AnimatePresence>
					<img
						onMouseMove={handleMouseMove}
						src={item.image}
						alt={item.name}
						className="object-cover !m-0 !p-0 object-top h-64 w-64 border-4 border-secondary group-hover:scale-105 group-hover:z-30 relative transition duration-500"
					/>

				</div>
			))}
		</div>
	);
};