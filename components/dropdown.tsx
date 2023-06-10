"use client";

import { ReactNode, useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

export const FADE_DOWN_ANIMATION_SETTINGS = {
	initial: { y: -50, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: { duration: 0.2, type: "tween" },
};
function Dropdown({ title, items }: { title: string; items: ReactNode[] }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<div
				className={`flex items-center pl-6 h-10 bg-line text-white lg:bg-transparent lg:text-grey border-y border-solid border-line cursor-pointer ${
					isOpen ? "lg:text-white" : ""
				}`}
				onClick={toggleDropdown}
			>
				<MdArrowRight
					className={`h-7 w-7  text-white text-lables transition-all duration-300  ${
						isOpen ? "rotate-90" : ""
					}`}
				/>
				{title}
			</div>
			{isOpen && (
				<motion.div {...FADE_DOWN_ANIMATION_SETTINGS}>
					{items.map((el, i) => (
						<div onClick={() => setIsOpen(false)} className="pl-12 w-full h-8" key={i}>
							{el}
						</div>
					))}
				</motion.div>
			)}
		</div>
	);
}

export default Dropdown;
