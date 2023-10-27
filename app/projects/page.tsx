import { Metadata } from "next";
import Project from "@/app/components/Project";
import { projects } from "../layout";

export const metadata: Metadata = {
	title: "Projects",
	description: "Projects that I can show you",
};

function page() {
	return (
		<div className="flex items-stretch justify-evenly flex-wrap gap-20 py-5">
			{projects.map((el, i) => (
				<Project key={i} {...el} />
			))}
		</div>
	);
}

export default page;
