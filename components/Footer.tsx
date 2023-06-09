import { SiGithub, SiTelegram } from "react-icons/si";

function Footer() {
	return (
		<div className=" h-10 min-h-[40px] w-full border-t border-solid border-line text-grey flex flex-row justify-start pl-6">
			<ul className="footer flex flex-row justify-start items-center w-full">
				<li className="flex items-center h-full text-code lg:text-lables pr-2 w-fit">
					find me in:
				</li>
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
