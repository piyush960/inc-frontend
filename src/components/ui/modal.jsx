import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { notification } from "../../assets";
import NotificationStrip from "./notification-strip";

import { notifications } from "../../constants";

const ExampleWrapper = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="fixed z-10 bottom-8 right-10">
			<button
				onClick={() => setIsOpen(true)}
			>
				<img src={notification} alt="notification" className="w-14 h-14 p-2 rounded-full bg-tertiary bg-cover"/>
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
						initial={{ scale: 0, rotate: "12.5deg" }}
						animate={{ scale: 1, rotate: "0deg" }}
						exit={{ scale: 0, rotate: "0deg" }}
						onClick={(e) => e.stopPropagation()}
						className="bg-tertiary text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
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
									className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
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