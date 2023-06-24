import { Metadata } from "next";
import Project from "@/components/Project";
import teamTasks from "@/public/rolling.png";
import yt from "@/public/yt.png";
import club from "@/public/club.png";
import pizza from "@/public/react_pizza.png";
import Image from "next/image";
import { IProject } from "@/types";
export const metadata: Metadata = {
	title: "Project",
	description: "Projects that I can show you",
};
const projects: Omit<IProject, "desc">[] = [
	{
		i: 1,
		title: "team-tasks",
		image: <Image placeholder="blur" src={teamTasks} alt={"task-manager"} />,
		demoUrl: "https://team-tasks.vercel.app/",
	},
	{
		i: 2,
		title: "youtube-clone",
		image: <Image placeholder="blur" src={yt} alt={"youtube-clone"} />,
		demoUrl: "https://youtube-clone-ivory.vercel.app/",
	},
	{
		i: 3,
		title: "pizza-ordering-store",
		image: (
			<Image placeholder="blur" src={pizza} alt={"pizza-ordering-store"} />
		),
		demoUrl: "https://react-pizza-app-five.vercel.app/",
	},
	{
		i: 4,
		title: "mega",
		image: <Image placeholder="blur" src={club} alt={"Mega"} />,
		demoUrl: "https://mega-premium.vercel.app/",
	},
];
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
