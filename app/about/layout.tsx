"use client";
import Dropdown from "@/app/components/Dropdown";
import { ReactNode } from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import Link from "next/link";

function layout({ children }: { children: ReactNode }) {
	return (
		<div className="w-full h-full flex flex-col">
			<div className="flex flex-grow flex-col lg:flex-row">
				<aside className="w-full min-w-[256px] min-w  lg:w-64 border-r border-solid border-line">
					<Dropdown
						title="contacts"
						items={[
							<Link
								key={0}
								className="flex items-center gap-1"
								href="/contact#name"
							>
								<BiMailSend className="h-4 w-4" />
								Email
							</Link>,
							<a
								key={1}
								className="flex items-center gap-1"
								href="tel:+79957942415"
							>
								<BiPhoneCall className="h-4 w-4" />
								+7(995)7942415
							</a>,
						]}
					/>
					<Dropdown
						title="personal-info"
						items={[
							<Link
								key={0}
								className="w-full block"
								href={"/about/personalInfo"}
							>
								bio
							</Link>,
						]}
					/>
					<Dropdown
						title="skills"
						items={[
							<Link
								key={"frontend"}
								className="w-full block"
								href={"/about/frontend"}
							>
								frontend
							</Link>,
							<Link
								key={"databases"}
								className="w-full block"
								href={"/about/database"}
							>
								databases
							</Link>,
							<Link
								key={"algorithms"}
								className="w-full block"
								href={"/about/algorithms"}
							>
								algorithms
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
