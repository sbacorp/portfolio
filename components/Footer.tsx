import { SiGithub, SiTelegram } from "react-icons/si";
export const links = [{ href: "https://t.me/frontsDev" }];
function Footer() {
	return (
		<div className=" h-10 w-full border-t border-solid border-line text-grey hidden md:flex flex-row justify-start pl-6">
			<ul className="nav flex flex-row justify-start items-center w-full">
				<li className="flex items-center lg:w-56 h-full">Найди меня тут:</li>
				<li
					className={`flex items-center px-4 border-solid border-x border-line h-full`}
				>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://t.me/frontsDev"
					>
						<SiTelegram />
					</a>
				</li>
				<li
					className={`flex items-center px-4 border-solid border-l border-line h-full`}
				>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/sbacorp"
					>
						<SiGithub />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Footer;
