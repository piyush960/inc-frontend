import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { notification } from "../assets";
import NotificationStrip from "./ui/notification-strip";

import { notifications } from "../constants";

const ExampleWrapper = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="fixed z-10 bottom-6 right-6">
			<button
			className="relative inline-block p-px font-semibold leading-6 text-white-100 bg-tertiary shadow-2xl cursor-pointer rounded-full shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
			onClick={() => setIsOpen(prev => !prev)}
			>
			<span className="absolute inset-0 rounded-full bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-[2px]"></span>

			<span className="relative z-10 block px-4 py-4 rounded-full bg-gray-950">
				<img src={notification} alt="notification" />
			</span>
			</button>
			<SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
};

const SpringModal = ({ isOpen, setIsOpen }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setIsOpen(false)}
					className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						onClick={(e) => e.stopPropagation()}
						className="bg-tertiary text-white-100 p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
					>
						<div className="relative z-10 mb-4">
							<NotificationStrip words={notifications} />
						</div>
							<h3 className="text-3xl font-bold text-center mb-2">
								One more thing!
							</h3>
							<p className="text-center mb-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
								aperiam vitae, sapiente ducimus eveniet in velit.
							</p>
							<div className="flex gap-2">
								<button
									onClick={() => setIsOpen(false)}
									className="bg-transparent hover:bg-white-100/10 transition-colors text-white-100 font-semibold w-full py-2 rounded"
								>
									Close
								</button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ExampleWrapper;