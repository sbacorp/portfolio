const skills = [
	{
		slug: "frontend",
		title: "Frontend",
		description:
			"Я имею два года опыта в разработке фронтенд-приложений. Основной инструмент, с которым я работаю, - Next.js. Я владею TypeScript и Redux, и использую их для создания масштабируемых и поддерживаемых проектов. Я также опытен в использовании Tailwind CSS для быстрой и эффективной стилизации интерфейсов. Моя цель - создавать пользовательские веб-приложения с отзывчивым и интуитивно понятным пользовательским интерфейсом.",
		codesnippets: [],
	},

	{
		slug: "database",
		title: "Базы данных",
		description:
			"Мой опыт работы с базами данных сосредоточен на PostgreSQL. Я знаком с созданием и управлением баз данных, проектированием таблиц и оптимизацией запросов. Я также знаком с использованием инструментов администрирования баз данных, таких как pgAdmin. В своих проектах я активно использую PostgreSQL для сохранения и извлечения данных, обеспечивая надежность и эффективность работы приложений.",
		codesnippets: [],
	},
	{
		slug: "algorithms",
		title: "Алгоритмы",
		description:
			"Алгоритмы являются важной частью моего опыта в разработке программного обеспечения. Я обладаю глубоким пониманием различных алгоритмических подходов и структур данных. Регулярно решаю задачи на алгоритмы на платформах, таких как LeetCode и HackerRank, чтобы поддерживать свои навыки в этой области. Мой опыт в алгоритмах помогает мне создавать эффективные и оптимизированные решения, особенно в критических частях приложений.",
		codesnippets: [
			`
const isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set(),
            col = new Set(),
            box = new Set();
        for (let j = 0; j < 9; j++) {
            let _row = board[i][j];
            let _col = board[j][i];
        let _box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]
           {...code}
};`,
		],
	},
];

type Experience = {
	slug?: string;
	title?: string;
	description?: string;
	codesnippets: string[];
};
import CodeHighlighter from "@/components/CodeHighlighter";
import { Metadata } from "next";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const info = skills.find((exp) => exp.slug === params.slug);

	return {
		title: info?.title || "Мои навыки",
	};
}

function Page({ params }: { params: { slug: string } }) {
	const data: Experience | undefined = skills.find(
		(exp) => exp.slug === params.slug
	);
	return (
		<div className="h-full flex pt-5 flex-col items-center justify-center lg:justify-between  lg:flex-row  px-6">
			<div className="w-full lg:w-2/5 text">{data?.description}</div>
			<div className="code snippets flex flex-col items-center justify-start">
				<p className=" text-body text-line"> // Code snippet showcase:</p>
				<div className="snippets flex flex-col">
					{data?.codesnippets.map((el, i) => (
						<CodeHighlighter key={i} code={el} />
					))}
				</div>
			</div>
		</div>
	);
}
export default Page;
