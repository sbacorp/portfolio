import { Metadata } from "next";
import { Experience } from "@/types";
import { getInfo } from "@/app/lib/getInfo";
type Props = {
	params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const data: Experience | null = await getInfo(params.slug);
	return {
		title: data?.title || "Info",
	};
}

export default async function SkillsInfo({ params: { slug } }: Props) {
	const skills: Experience | null = await getInfo(slug);
	return (
		<div className="h-full flex flex-col items-center justify-center lg:flex-row px-6">
			<div className="w-full  lg:w-4/5 text-code  md:text-body ">{`${skills?.description}`}</div>
		</div>
	);
}
