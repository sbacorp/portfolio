import { Metadata } from "next";
import { getInfo } from "@/app/lib/vercel-storage";
import { Experience } from "@/types";

type Props = {
	params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const data = await getInfo(params.slug);
	return {
		title: data?.title,
	};
}

export default async function SkillsInfo({ params: { slug } }: Props) {
	const skillsData: Experience | null = await getInfo(slug);
	return (
		<div className="h-full flex pt-5 flex-col items-center justify-center lg:justify-center  lg:flex-row  px-6">
			<div className="w-full lg:w-4/5 text">{`${skillsData?.description}`}</div>
		</div>
	);
}
