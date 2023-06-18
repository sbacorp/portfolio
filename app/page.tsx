import { Metadata } from "next";
import GameContainer from "@/components/gameContainer";
import Typing from "@/components/Typing";

export const metadata: Metadata = {
	title: "Shankin Dev",
	description: "Shankin Dev - Frontend developer",
};
export default function Home() {
	return (
		<div className="flex gap-20 xl:gap-32 px-3 xl:px-0">
			<div
				className="bg-blur__green bg-accent2/40 absolute top-20 left-0
			md:left-1/2 md:top-8 w-[250px] h-[250px] md:h-[400px] md:w-[400px]"
			/>
			<div
				className="bg-blur__blue bg-secondary3/40 absolute bottom-20 right-0
			md:right-[15%] md:bottom-12 w-[250px] h-[250px] md:h-[400px] md:w-[400px] "
			/>

			<div className="welcome flex flex-col text-white">
				<Typing toRotate={["Bogdan", "Shankin"]} />
				<p className="text-subhead">{">"} Front-end developer</p>
				<p className="text-body z-30 mt-20 hidden xl:block">
					{"// complete the game ->"}
				</p>
				<p className="text-body z-30  hidden xl:block">
					{"// you can also see it on my Github page"}
				</p>
				<p className="z-30 text-lables">
					<span className="text-secondary3 mr-2"> const</span>
					<span>
						<span className="text-accent2">githubLink</span>
						{" = "}
					</span>
					<a href="https://github.com/sbacorp">
						<span className="text-accent3 cursor-pointer">
							“https://github.com/sbacorp”
						</span>
					</a>
				</p>
			</div>
			<GameContainer />
		</div>
	);
}
