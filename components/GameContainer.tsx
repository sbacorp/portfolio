"use client";
import { useState } from "react";
import Game from "./Game";
import KeysArrows from "./KeysArrows";

function GameContainer() {
	const [remainedFood, setRemainedFood] = useState<Array<string>>(
		new Array(10).fill(" ")
	);
	return (
		<div className=" glass hidden lg:flex gap-6 py-8 px-7 border-line">
			<Game remainedFood={remainedFood} setRemainedFood={setRemainedFood} />
			<div className="right flex flex-col">
				<div className="info-key flex flex-col items-center gap-2 text-white text-code text-left">
					<KeysArrows /> {"// food left :"}
					<div className="grid grid-cols-5 gap-5">
						{remainedFood.map((_, i) => (
							<div
								key={i}
								className="food h-3 w-3 rounded-full bg-gradient-radial from-gradient2 via-gradient2/80 to-transparent shadow-xl"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default GameContainer;
