import { Metadata } from "next";
import { cache } from "react";
import { Experience } from "@/types";
import { supabase } from "@/app/lib/supabase";
type Props = {
	params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const data: Experience | null = await getInfo(params.slug);

	return {
		title: data?.title || "Информация",
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

const getInfo = cache(async function getInfo(
	slug: string
): Promise<Experience | null> {
	const { data, error } = await supabase
		.from("portfolio")
		.select("*")
		.eq("slug", slug);

	if (error) {
		console.log(error);
		return null;
	}

	if (data && data.length > 0) {
		const { slug, title, description } = data[0];
		const experience: Experience = {
			slug,
			title,
			description,
		};
		return experience;
	}

	return null;
});
