function KeysArrows() {
	return (
		<>
			// Используй стрелки <br /> // чтобы играть
			<div className="flex items-center justify-center border border-solid border-line rounded-lg h-7 w-12 bg-primary1">
				<svg
					width="9"
					height="7"
					viewBox="0 0 9 7"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z"
						fill="white"
					/>
				</svg>
			</div>
			<div className="flex gap-2">
				<div className="flex items-center justify-center border border-solid border-line rounded-lg h-7 w-12 bg-primary1">
					<svg
						className={`-rotate-90`}
						width="9"
						height="7"
						viewBox="0 0 9 7"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z"
							fill="white"
						/>
					</svg>
				</div>
				<div className="flex items-center justify-center border border-solid border-line rounded-lg h-7 w-12 bg-primary1">
					<svg
						className={`rotate-180`}
						width="9"
						height="7"
						viewBox="0 0 9 7"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z"
							fill="white"
						/>
					</svg>
				</div>
				<div className="flex items-center justify-center border border-solid border-line rounded-lg h-7 w-12 bg-primary1">
					<svg
						className={`rotate-90`}
						width="9"
						height="7"
						viewBox="0 0 9 7"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		</>
	);
}

export default KeysArrows;
