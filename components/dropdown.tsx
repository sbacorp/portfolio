"use client";

import { ReactNode, useState } from "react";
import { MdArrowRight } from "react-icons/md";

function Dropdown({ title, items }: { title: string; items: ReactNode[] }) {

	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<div
				className=" flex items-center pl-6 h-10 border-b border-solid border-line cursor-pointer"
				onClick={toggleDropdown}
			>
				<MdArrowRight
					className={`h-7 w-7 text-white transition-all duration-300  ${
						isOpen ? "rotate-90" : ""
					}`}
				/>
				{title}
			</div>
			{isOpen && (
				<div>
					{items.map((el, i) => (
						<div className="pl-12 w-full h-8 border-b border-line" key={i}>
							{el}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Dropdown;
