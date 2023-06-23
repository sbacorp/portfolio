"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import { links } from "@/constants";



function Header() {
	const [active, setActive] = useState(false);
	useEffect(() => {
		console.log(active);
	}, [active]);

	const pathname = usePathname();
	return (
		<>
			<div className="absolute bg-primary2 top-0 left-0 z-50 lg:h-12 w-full lg:border-b border-solid border-line text-grey">
				<ul
					className={`nav h-56 lg:flex lg:flex-row justify-start items-center lg:h-full w-full ${
						active ? "flex flex-col" : "hidden"
					}`}
				>
					<li className="z-50 flex items-center w-full lg:w-64 pl-6 h-14 lg:border-b-0 border-b border-solid border-line ">
						Bogdan Shankin
					</li>
					{links.map((link, i) => {
						const isActive = pathname === link.href;
						return (
							<li
								onClick={() => setActive(false)}
								key={i}
								className={`flex items-center px-4 border-solid  lg:border-l border-l-line lg:border-b border-b lg:h-full h-14 w-full lg:w-fit ${
									isActive
										? " border-b-4 border-solid border-accent1"
										: " border-b-line"
								}`}
							>
								<Link href={link.href}>{link.text}</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<motion.div
				className="flex lg:hidden absolute top-0 right-1 z-50"
				onClick={() => setActive(!active)}
			>
				{active ? (
					<HiOutlineX className="w-8 h-8 text-grey" />
				) : (
					<HiMenu className="w-8 h-8 text-grey" />
				)}
			</motion.div>
		</>
	);
}

export default Header;
