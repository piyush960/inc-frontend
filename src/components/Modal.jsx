import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { notification } from "../assets";
import InfiniteLoopSlider from "./ui/infinite-loop-slider";

import { notifications } from "../constants";

const ExampleWrapper = ({ setLightOn }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed z-50 bottom-4 right-4">
			<button
			className="relative inline-block p-px font-semibold leading-6 text-white-100 bg-tertiary shadow-2xl cursor-pointer rounded-full shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
			onClick={() => {
				setIsOpen(prev => !prev)
				setLightOn(prev => !prev);
			}}
			>
			<span className="absolute inset-0 rounded-full bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-[2px]"></span>

			<span className="relative z-10 block p-3 sm:p-4 rounded-full bg-gray-950">
				<img loading='lazy'  src={notification} alt="notification"/>
			</span>
			</button>
			<SpringModal isOpen={isOpen} setIsOpen={setIsOpen} setLightOn={setLightOn} />
		</div>
	);
};

const SpringModal = ({ isOpen, setIsOpen, setLightOn }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => {
						setIsOpen(false)
						setLightOn(prev => !prev)
					}}
					className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						onClick={(e) => e.stopPropagation()}
						className="text-white-100 p-px w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
					>	
						<span className="absolute bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 inset-0"></span>
						<div className="relative bg-tertiary p-4">
							<div className="relative z-10 mb-4">
							<InfiniteLoopSlider
							duration={25000}
							>
								{
									notifications.map((noti) => (
										<li key={noti} className="mr-10 rounded-xl text-nowrap px-2">
											{noti}
										</li>
									))
								}
							</InfiniteLoopSlider>
							</div>
								<h3 className="text-3xl font-bold text-center mb-2">
									Latest Notifications
								</h3>
								<p className="text-center mb-6 text-slate-400">
									no new notifications
								</p>
								<div className="flex gap-2">
									<button
										onClick={() => {
											setIsOpen(false)
											setLightOn(prev => !prev)
										}}
										className="bg-transparent hover:bg-white-100/10 transition-colors text-white-100 font-semibold w-full py-2"
									>
										Close
									</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ExampleWrapper;