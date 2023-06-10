import { Metadata } from "next";
import Project, { IProject } from "@/components/Project";
import rolling from "@/public/rolling.png";
import yt from "@/public/yt.png";
import club from "@/public/club.png";
import pizza from "@/public/react_pizza.png";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Проекты",
	description: "Проекты, которые я могу вам продемонстрировать",
};

function page() {
	const projects: IProject[] = [
		{
			title: "менеджер-задач",
			desc: "Менеджер задач по типу kanban",
			image: (
				<Image src={rolling} alt={"менеджер-задач"} width={250} height={250} />
			),
			demoUrl: "https://task-manager-puce-xi.vercel.app",
		},
		{
			title: "интернет-пиццерия",
			desc: "Интернет магазин по заказу пиццы",
			image: (
				<Image src={pizza} alt={"интернет-пиццерия"} width={250} height={220} />
			),
			demoUrl: "https://react-pizza-app-five.vercel.app/",
		},
		{
			title: "mega",
			desc: "Сайт для сети компьютерных клубов. Мой первый проект",
			image: <Image src={club} alt={"Mega"} width={250} height={220} />,
			demoUrl: "https://youtube-clone-ivory.vercel.app/",
		},
		{
			title: "youtube-клон",
			desc: "Простой клон вмдеохостинга Youtube, работа с yt api",
			image: <Image src={yt} alt={"youtube-клон"} width={250} height={220} />,
			demoUrl: "https://youtube-clone-ivory.vercel.app/",
		},
	];
	return (
		<div className="flex items-baseline justify-evenly flex-wrap gap-20">
			{projects.map((el, i) => (
				<Project key={i} i={i} {...el} />
			))}
		</div>
	);
}

export default page;
