import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Напиши Мне",
	description: "Оставь заявку в Shankin Studio",
};

import Dropdown from "@/components/dropdown";
import React from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full h-full flex flex-col">
			<div className="flex flex-grow flex-col lg:flex-row">
				<aside className="aside w-full  lg:w-56 border-r border-solid border-line">
					<Dropdown
						title="contacts"
						items={[
							<a className="flex items-center gap-1" href="#name">
								<BiMailSend className="h-4 w-4" />
								mail
							</a>,
							<a className="flex items-center gap-1" href="tel:+79957942415">
								<BiPhoneCall className="h-4 w-4" />
								+7(995)7942415
							</a>,
						]}
					/>
				</aside>
				<div className="flex flex-col flex-grow">
					<header className="hidden lg:block w-full h-10 border-b border-solid border-line">
						<span className="hidden lg:flex items-center justify-center px-3 text- w-fit h-full border-r border-solid border-line shrink-0">
							Контакты
						</span>
					</header>
					{children}
				</div>
			</div>
		</div>
	);
}
export default layout;
