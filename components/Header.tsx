"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const links = [
	{ href: "/", text: "_привет" },
	{ href: "/about", text: "_обо-мне" },
	{ href: "/projects", text: "_портфолио" },
	{ href: "/contact", text: "_напиши-мне" },
];
function Header() {
	const pathname = usePathname();
	return (
		<div className=" h-12 w-full border-b border-solid border-line text-grey flex flex-col lg:flex-row justify-start pl-6">
			<ul className="nav flex flex-col lg:flex-row justify-start items-center w-full">
				<li className="flex items-center lg:w-56 h-full">Богдан Шанькин</li>
				{links.map((link, i) => {
					const isActive = pathname === link.href;
					return (
						<li
							key={i}
							className={`flex items-center px-4 border-solid border-l border-line h-full ${
								isActive ? "text-white" : "text-b"
							}`}
						>
							<Link href={link.href}>{link.text}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Header;
