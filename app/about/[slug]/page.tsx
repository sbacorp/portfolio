type Experience = {
	slug?: string;
	title?: string;
	description?: string;
	codesnippets: string[];
};
import CodeHighlighter from "@/components/CodeHighlighter";
import { Metadata } from "next";
import getInfo from "@/app/lib/getInfo";
type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const data = await getInfo(params.slug);
	return {
		title: data[0].title,
	};
}

export default async function SkillsInfo({ params: { slug } }: Props) {
	const skillsData: Experience[] = await getInfo(slug);
	let data = skillsData[0];
	return (
		<div className="h-full flex pt-5 flex-col items-center justify-center lg:justify-between  lg:flex-row  px-6">
			<div className="w-full lg:w-2/5 text">{data.description}</div>
			<div className="code snippets flex flex-col items-center justify-start">
				<p className=" text-body text-line"> // Code snippet showcase:</p>
				<div className="snippets flex flex-col">
					{data.codesnippets &&
						data?.codesnippets.map((el, i) => (
							<CodeHighlighter key={i} code={el} />
						))}
				</div>
			</div>
		</div>
	);
}
