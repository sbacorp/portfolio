"use client";
import { useState, useEffect } from "react";
interface IPosition {
	x: number;
	y: number;
}
enum Direction {
	Up = "up",
	Down = "down",
	Left = "left",
	Right = "right",
}
const SnakeGame = () => {
	const [snake, setSnake] = useState<IPosition[]>([]);
	const [food, setFood] = useState<IPosition>({ x: 0, y: 0 });
	const [direction, setDirection] = useState<Direction>(Direction.Up);
	const [gameOver, setGameOver] = useState(false);
	const [gameStarted, setGameStarted] = useState(false);

	const gameWidth = 25;
	const gameHeight = 45;

	// Инициализация змейки и пищи при загрузке компонента
	useEffect(() => {
		initializeGame();
	}, []);

	// Инициализация игры
	const initializeGame = () => {
		const initialSnake = [
			{ x: 7, y: 7 },
			{ x: 7, y: 8 },
			{ x: 7, y: 9 },
			{ x: 7, y: 10 },
			{ x: 7, y: 11 },
			{ x: 7, y: 12 },
			{ x: 7, y: 13 },
		];
		setSnake(initialSnake);
		generateFood();
		setDirection(Direction.Up);
		setGameOver(false);
		setGameStarted(false);
	};

	// Генерация случайной пищи
	const generateFood = () => {
		const newFood = {
			x: Math.floor(Math.random() * gameWidth),
			y: Math.floor(Math.random() * gameHeight),
		};
		setFood(newFood);
	};

	// Обработка нажатия клавиш для изменения направления движения
	useEffect(() => {
		if (gameOver || !gameStarted) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowUp" && direction !== Direction.Down) {
				setDirection(Direction.Up);
			} else if (e.key === "ArrowDown" && direction !== Direction.Up) {
				setDirection(Direction.Down);
			} else if (e.key === "ArrowLeft" && direction !== Direction.Right) {
				setDirection(Direction.Left);
			} else if (e.key === "ArrowRight" && direction !== Direction.Left) {
				setDirection(Direction.Right);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [direction, gameOver, gameStarted]);

	// Обновление положения змейки и проверка на столкновение с пищей или самой собой
	useEffect(() => {
		if (gameOver || !gameStarted) return;

		const interval = setInterval(() => {
			moveSnake();
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, [snake, gameOver, gameStarted]);

	const moveSnake = () => {
		const head = { ...snake[0] };

		switch (direction) {
			case Direction.Up:
				head.y = (head.y - 1 + gameHeight) % gameHeight;
				break;
			case Direction.Down:
				head.y = (head.y + 1) % gameHeight;
				break;
			case Direction.Left:
				head.x = (head.x - 1 + gameWidth) % gameWidth;
				break;
			case Direction.Right:
				head.x = (head.x + 1) % gameWidth;
				break;
			default:
				break;
		}

		const newSnake = [head, ...snake];
		if (head.x === food.x && head.y === food.y) {
			generateFood();
		} else {
			newSnake.pop();
		}

		setSnake(newSnake);
		checkCollision(head);
	};

	// Проверка на столкновение с границами или самой собой
	const checkCollision = (head: { x: number; y: number }) => {
		const collidedWithBorder =
			head.x < 0 || head.x >= gameWidth || head.y < 0 || head.y >= gameHeight;
		const collidedWithSelf = snake
			.slice(1)
			.some((segment) => segment.x === head.x && segment.y === head.y);

		if (collidedWithBorder || collidedWithSelf) {
			setGameOver(true);
		}
	};

	// Обработка клика по кнопке перезагрузки
	const handleRestartClick = () => {
		initializeGame();
	};

	// Обработка клика по кнопке старта
	const handleStartClick = () => {
		setGameStarted(true);
	};

	return (
		<div className="relative w-fit">
			<div className="game grid grid-cols-30 gap-0 p-2 bg-primary2 border border-solid border-line h-fit w-fit rounded-lg z-20">
				{Array(gameHeight)
					.fill("")
					.map((_, rowIndex) => (
						<div key={rowIndex} className="flex bg-primary2 ">
							{Array(gameWidth)
								.fill("")
								.map((_, colIndex) => {
									const isSnake = snake.some(
										(segment) =>
											segment.x === colIndex && segment.y === rowIndex
									);
									const isFood = food.x === colIndex && food.y === rowIndex;

									return (
										<div
											key={colIndex}
											className={`h-2 w-2 ${
												isSnake
													? "bg-accent2"
													: isFood
													? " rounded-full bg-gradient-radial from-gradient2 via-gradient2/80 to-transparent shadow-xl"
													: "bg-primary2"
											}`}
										/>
									);
								})}
						</div>
					))}
			</div>
			{gameOver && (
				<div>
					<div className="game-over absolute bottom-20 left-[5px] w-52 text-center py-3 text-accent2">GAME OVER!</div>
					<button
						className="absolute bottom-5 left-[20%] button-default text-code"
						onClick={handleRestartClick}
					>
						start-again
					</button>
				</div>
			)}
			{!gameOver && !gameStarted && (
				<button
					className="absolute bottom-5 left-[20%] button-primary text-code"
					onClick={handleStartClick}
				>
					start-game
				</button>
			)}
		</div>
	);
};

export default SnakeGame;
