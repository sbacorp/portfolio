"use server";
import { IProject } from "@/types";
import { supabase } from "./supabase";

export const getProject = async function (
	slug: string
): Promise<IProject | null> {
	const { data, error } = await supabase
		.from("project")
		.select("*")
		.eq("title", slug)
		.single();

	if (error) {
		console.log(error);
		return null;
	}

	if (data) {
		const {
			i,
			title,
			desc,
			demoUrl,
			gitUrl,
			keyFeatures,
			technologies,
			conclusion,
		} = data;
		const project: IProject = {
			i,
			title,
			desc,
			demoUrl,
			gitUrl,
			keyFeatures,
			technologies,
			conclusion,
		};
		return project;
	}

	return null;
};
