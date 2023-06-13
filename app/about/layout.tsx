"use client";
import Dropdown from "@/components/dropdown";
import React, { useState } from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
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
								
								className="w-full block"
								href={"/about/frontend"}
							>
								frontend
							</Link>,
							<Link
								
								className="w-full block"
								href={"/about/database"}
							>
								бд
							</Link>,
							<Link
								
								className="w-full block"
								href={"/about/algorithms"}
							>
								алгоритмы
							</Link>,
						]}
					/>
				</aside>
					<main className="w-full h-full flex-grow flex items-center flex-col justify-center">
						{children}
					</main>
			</div>
		</div>
	);
}
export default layout;
