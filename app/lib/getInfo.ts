"use server";
import { Experience } from "@/types";
import { supabase } from "./supabase";

export const getInfo = async function (
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
};
