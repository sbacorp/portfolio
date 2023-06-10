import { MdArrowLeft, MdArrowDropUp } from "react-icons/md";

function KeysArrows() {
	return (
		<>
			// Используй стрелки <br /> // чтобы играть
			<div className="flex items-center justify-center border border-solid border-line rounded-lg h-7 w-12 bg-primary1">
				<MdArrowDropUp className="h-7 w-12 " />
			</div>
			<div className="flex gap-2">
				{Array(3)
					.fill("")
					.map((_, i) => (
						<div
							key={i}
							className="flex items-center justify-center border border-solid border-line rounded-lg  bg-primary1 "
						>
							<MdArrowLeft
								className={`h-7 w-12 ${
									i == 1 ? "-rotate-90" : `rotate-${90 * i}`
								}`}
							/>
						</div>
					))}
			</div>
		</>
	);
}

export default KeysArrows;
