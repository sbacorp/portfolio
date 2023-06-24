import { Metadata } from "next";
import { IProject } from "@/types";
import { getProject } from "@/app/lib/getProject";
import { notFound } from "next/navigation";
import Link from "next/link";
type Props = {
	params: { slug: string };
};

export const revalidate = 10;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return {
		title: "About " + params.slug || "About project",
		description: `On this page you can read more about ${params.slug} project`,
	};
}

export default async function page({ params: { slug } }: Props) {
	const project: IProject | null = await getProject(slug);
	console.log(project);
	if (!project) {
		notFound();
	}

	return (
		<div className="flex gap-10 grow-0 h-full py-2 px-5">
			<div>
				<span className="text-subhead text-secondary3 block">
					{"//"}
					{project.title}
				</span>
				<div className="desc text-body">{project.desc}</div>
				<div className="keyFeatures">
					<span className="text-body text-secondary3 block">
						Key Features :
					</span>
					{project.keyFeatures &&
						project.keyFeatures
							.split("\n")
							.map((el, i) => <p key={i}> {`${i} :${el}`}</p>)}
				</div>
				<div className="keyFeatures">
					<span className="text-body text-secondary3 block">
						Technologies used :
					</span>
					{project.technologies &&
						project.technologies.split("\n").map((el, i) => (
							<p className=" text-ellipsis" key={i}>
								{" "}
								{`${el}`}
							</p>
						))}
				</div>
				<div className="desc text-body">{project.conclusion}</div>
				<div className="links flex gap-5 justify-end w-full py-6 first:justify-start">
					<Link className="button-default w-fit" href={"/projects"}>
						Back
					</Link>
					<Link
						className="button-primary"
						href={project.demoUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						Demo
					</Link>
					<a
						className="button-primary"
						href={project.gitUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						Repo
					</a>
					<br />
				</div>
			</div>
		</div>
	);
}
