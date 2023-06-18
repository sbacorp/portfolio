import { Metadata } from "next";
import Project from "@/components/Project";
import rolling from "@/public/rolling.png";
import yt from "@/public/yt.png";
import club from "@/public/club.png";
import pizza from "@/public/react_pizza.png";
import Image from "next/image";
import { IProject } from "@/types";

export const metadata: Metadata = {
	title: "Project",
	description: "Projects that I can show you",
};

function page() {
	const projects: IProject[] = [
		{
			title: "task-manager",
			desc: "A kanban-type task manager",
			image: <Image placeholder="blur" src={rolling} alt={"task-manager"} />,
			demoUrl: "https://task-manager-puce-xi.vercel.app",
		},
		{
			title: "pizza-ordering-store",
			desc: "Online pizza ordering store",
			image: (
				<Image placeholder="blur" src={pizza} alt={"pizza-ordering-store"} />
			),
			demoUrl: "https://react-pizza-app-five.vercel.app/",
		},
		{
			title: "mega",
			desc: "Website for a network of computer clubs. My first project.",
			image: <Image placeholder="blur" src={club} alt={"Mega"} />,
			demoUrl: "https://mega-premium.vercel.app/",
		},
		{
			title: "youtube-clone",
			desc: "A simple clone of Youtube videohosting, work with youtube api v3.",
			image: <Image placeholder="blur" src={yt} alt={"youtube-clone"} />,
			demoUrl: "https://youtube-clone-ivory.vercel.app/",
		},
	];
	return (
		<div className="flex items-stretch justify-evenly flex-wrap gap-20">
			{projects.map((el, i) => (
				<Project key={i} i={i} {...el} />
			))}
		</div>
	);
}

export default page;
