"use client";
import Dropdown from "@/components/dropdown";
import React, { useState } from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
	const [activeTab, setActiveTab] = useState("био");

	return (
		<div className="w-full h-full flex flex-col">
			<div className="flex flex-grow flex-col lg:flex-row">
				<aside className="aside w-full min-w-[256px] min-w  lg:w-64 border-r border-solid border-line">
					<Dropdown
						title="контакты"
						items={[
							<Link className="flex items-center gap-1" href="/contact#name">
								<BiMailSend className="h-4 w-4" />
								Почта
							</Link>,
							<a className="flex items-center gap-1" href="tel:+79957942415">
								<BiPhoneCall className="h-4 w-4" />
								+7(995)7942415
							</a>,
						]}
					/>
					<Dropdown
						title="о-себе"
						items={[
							<Link
								onClick={() => setActiveTab("био")}
								className="w-full block"
								href={"/about/personalInfo"}
							>
								био
							</Link>,
						]}
					/>
					<Dropdown
						title="навыки"
						items={[
							<Link
								onClick={() => setActiveTab("frontend")}
								className="w-full block"
								href={"/about/skillsInfo/frontend"}
							>
								frontend
							</Link>,
							<Link
								onClick={() => setActiveTab("бд")}
								className="w-full block"
								href={"/about/skillsInfo/database"}
							>
								бд
							</Link>,
							<Link
								onClick={() => setActiveTab("алгоритмы")}
								className="w-full block"
								href={"/about/skillsInfo/algorithms"}
							>
								алгоритмы
							</Link>,
						]}
					/>
				</aside>
				<div className="flex flex-col flex-grow">
					<header className="hidden lg:block w-full h-10 border-b border-solid border-line">
						<span className="hidden lg:flex items-center justify-center px-3 text- w-fit h-full border-r border-solid border-line shrink-0">
							{activeTab}
						</span>
					</header>
					<main className="w-full h-full flex-grow flex items-center flex-col justify-center">
						{children}
					</main>
				</div>
			</div>
		</div>
	);
}
export default layout;
