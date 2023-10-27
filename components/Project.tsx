import { IProject } from "@/types";
import Link from "next/link";

function Project({ i, title, image, demoUrl }: Omit<IProject, "desc">) {
	return (
		<div className="flex flex-col justify-start w-4/5 sm:w-[300px]">
			<p className="text-lables text-secondary3 ">
				Project {i}{" "}
				<span className="text-code text-line">
					{"//_"}
					{title}
				</span>
			</p>
			<div className=" bg-primary3 rounded-b-2xl border border-line h-fit pb-3 w-fit flex flex-col gap-5 items-center ">
				{image}
				<div className="flex gap-3">
					<a
						href={demoUrl}
						className="button-default w-32"
						target="_blank"
						rel="noopener noreferrer"
					>
						DEMO
					</a>
					<Link href={`projects/${title}`} className="button-default w-32">
						ABOUT
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Project;
