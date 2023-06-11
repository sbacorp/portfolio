import { Generated, ColumnType } from "kysely";
import { createKysely } from "@vercel/postgres-kysely";

// define types
type Database = {
	info: InfoTable;
};

type InfoTable = {
	id: Generated<number>;
	slug: string;
	title: string;
	description: string;
};
type Experience = {
	slug: string;
	title: string;
	description: string;
};

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


