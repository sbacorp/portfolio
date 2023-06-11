import { Database, Experience } from "@/types";
import { createKysely } from "@vercel/postgres-kysely";

const db = createKysely<Database>();

export async function getInfo(targetSlug: string): Promise<Experience | null> {
	const res = await db
		.selectFrom("info")
		.select([
			"info.slug as slug",
			"info.title as title",
			"info.description as description"
		])
		.where("info.slug", "=", targetSlug)
		.execute();

	
	return res[0];
}


