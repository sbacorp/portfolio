import { ReactNode } from "react";

function GameContainer({ children }: { children: ReactNode }) {
	return (
		<div className=" game-container hidden md:flex gap-6 py-8 px-7 border-line">
			<div className="left">{children}</div>
			<div className="right flex flex-col">
				<div className="info-key flex flex-col items-center gap-2 text-white text-code">
					// Используй стрелки <br /> // чтобы чтобы
					<div className="arrow border border-solid border-line rounded-lg h-6 w-14 bg-primary1"></div>
					<div className="arrows flex gap-2">
						{Array(3)
							.fill("")
							.map((_, i) => (
								<div className="arrow border border-solid border-line rounded-lg h-6 w-14 bg-primary1"></div>
							))}
					</div>
					<div className="food text-code">
						// Осталось съесть <br />
						<div className="food__items"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GameContainer;
