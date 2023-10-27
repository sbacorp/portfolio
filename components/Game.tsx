"use client";
import { IPosition } from "@/types";
import { useState, useEffect } from "react";
enum Direction {
	Up = "up",
	Down = "down",
	Left = "left",
	Right = "right",
}
const initialSnake = [
	{ x: 7, y: 15 },
	{ x: 7, y: 16 },
	{ x: 7, y: 17 },
	{ x: 7, y: 18 },
];
const SnakeGame = ({
	remainedFood,
	setRemainedFood,
}: {
	remainedFood: string[];
	setRemainedFood: (remainedFood: string[]) => void;
}) => {
	const [snake, setSnake] = useState<IPosition[]>(initialSnake);
	const [food, setFood] = useState<IPosition>({ x: 0, y: 0 });
	const [direction, setDirection] = useState<Direction>(Direction.Up);
	const [gameOver, setGameOver] = useState(false);
	const [gameStarted, setGameStarted] = useState(false);
	const [gameOverText, setGameOverText] = useState<string>("ПОРАЖЕНИЕ!");
	const state = {
		snake,
		food,
		direction,
		gameOver,
		gameStarted,
		gameOverText,
		remainedFood,
	};
	const setState = {
		setSnake,
		setFood,
		setDirection,
		setGameOver,
		setGameStarted,
		setGameOverText,
		setRemainedFood,
	};
	const gameWidth = 15;
	const gameHeight = 30;
	useEffect(() => {
		initializeGame();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Инициализация игры
	const initializeGame = () => {
		setState.setSnake(initialSnake);
		setState.setDirection(Direction.Up);
		setState.setGameOver(false);
		setState.setGameStarted(false);
		generateFood();
	};

	// Генерация случайной пищи
	const generateFood = () => {
		const newFood = {
			x: Math.floor(Math.random() * gameWidth),
			y: Math.floor(Math.random() * gameHeight),
		};
		setState.setFood(newFood);
	};

	// Обработка нажатия клавиш для изменения направления движения
	useEffect(() => {
		if (state.gameOver || !state.gameStarted) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowUp" && state.direction !== Direction.Down) {
				setState.setDirection(Direction.Up);
			} else if (e.key === "ArrowDown" && state.direction !== Direction.Up) {
				setState.setDirection(Direction.Down);
			} else if (e.key === "ArrowLeft" && state.direction !== Direction.Right) {
				setState.setDirection(Direction.Left);
			} else if (e.key === "ArrowRight" && state.direction !== Direction.Left) {
				setState.setDirection(Direction.Right);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [state.direction, state.gameOver, state.gameStarted]);

	// Обновление положения змейки и проверка на столкновение с пищей или самой собой
	useEffect(() => {
		if (state.gameOver || !state.gameStarted) return;
		const interval = setInterval(() => {
			moveSnake();
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, [state.snake, state.gameOver, state.gameStarted]);

	const moveSnake = () => {
		const head = { ...state.snake[0] };
		switch (state.direction) {
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
		const newSnake = [head, ...state.snake];
		if (head.x === food.x && head.y === food.y) {
			setState.setRemainedFood(remainedFood.splice(0, remainedFood.length - 1));
			generateFood();
		} else {
			newSnake.pop();
		}

		setState.setSnake(newSnake);
		checkCollision(head);
	};
	useEffect(() => {
		if (state.remainedFood.length === 0) {
			setState.setGameOver(true);
			setState.setGameOverText("ПОБЕДА!");
		}
	}, [state.remainedFood]);
	// Проверка на столкновение с границами или самой собой
	const checkCollision = (head: { x: number; y: number }) => {
		const collidedWithBorder =
			head.x < 0 || head.x >= gameWidth || head.y < 0 || head.y >= gameHeight;
		const collidedWithSelf = state.snake
			.slice(1)
			.some((segment) => segment.x === head.x && segment.y === head.y);

		if (collidedWithBorder || collidedWithSelf) {
			setState.setGameOver(true);
			setState.setGameOverText("ПОРАЖЕНИЕ!");
		}
	};

	const handleRestartClick = () => {
		initializeGame();
		setState.setRemainedFood(new Array(10).fill(""));
		setState.setGameStarted(true);
	};

	// Обработка клика по кнопке старта
	const handleStartClick = () => {
		setState.setGameStarted(true);
		setState.setRemainedFood(new Array(10).fill(""));
	};

	return (
		<div className="relative w-fit h-fit">
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
											className={`h-3 w-3 ${
												isSnake
													? "bg-accent2"
													: isFood
													? "rounded-full bg-gradient-radial from-gradient2 via-gradient2/80 to-transparent shadow-xl"
													: "bg-primary2"
											}`}
										/>
									);
								})}
						</div>
					))}
			</div>
			{state.gameOver && (
				<div>
					<div className="game-over absolute bottom-20 left-[5px] w-48 text-center py-3 text-accent2">
						{state.gameOverText}
					</div>
					<button
						className="absolute bottom-5 left-[20%] button-default text-code"
						onClick={handleRestartClick}
					>
						start-again
					</button>
				</div>
			)}
			{!state.gameOver && !state.gameStarted && (
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
