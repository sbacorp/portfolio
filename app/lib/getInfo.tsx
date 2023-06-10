export default async function getInfo(slug: string) {
	const res = await fetch(
		`https://6484df85ee799e32162719fc.mockapi.io/info?slug=${slug}`
	);
	if (!res.ok) throw new Error("failed to fetch data from a server");
	return res.json();
}
