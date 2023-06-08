import Game from "@/components/game";
import Image from "next/image";
import { Metadata } from "next";
import GameContainer from "@/components/gameContainer";

export const metadata: Metadata = {
	title: "Shankin Studio",
	description: "Приветствую вас на Shankin Studio",
};
export default function Home() {
	return (
		<div className="flex gap-32">
			<div
				className="bg-blur__green bg-accent2/40 absolute top-20 left-0
			md:left-1/2 md:top-8 w-[250px] h-[250px] md:h-[400px] md:w-[400px]"
			/>
			<div
				className="bg-blur__blue bg-secondary3/40 absolute bottom-20 right-0
			md:right-[15%] md:bottom-12 w-[250px] h-[250px] md:h-[400px] md:w-[400px] "
			/>

			<div className="welcome flex flex-col text-white">
				<p className="text-body">Привет! Меня зовут</p>
				<p className="text-head z-30">Богдан Шанькин</p>
				<p className="text-subhead z-30"> {">"} Frontend разработчик</p>
				<p className="text-body z-30 mt-20">
					//Здесь ты можешь поймать настольгию {"->"}
				</p>
				<p className="text-body z-30">
					//Так же можешь ознакомиться с моей Github страницей
				</p>
				<p className="z-30 text-lables">
					<span className="text-secondary3 mr-2"> const</span>
					<span className="text-accent2">githubLink</span> =
					<a href="https://github.com/sbacorp"></a>{" "}
					<span className="text-accent3 cursor-pointer">“https://github.com/example/url”</span>
				</p>
			</div>
			<GameContainer>
				<Game />
			</GameContainer>
		</div>
	);
}
