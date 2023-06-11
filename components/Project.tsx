import React, { ReactNode } from "react";

export interface IProject {
	i?: number;
	title: string;
	desc: string;
	image: ReactNode;
	demoUrl: string;
}

function Project({ i, title, desc, image, demoUrl }: IProject) {
	return (
		<div className="flex flex-col justify-start w-4/5 sm:w-[300px]">
			<p className="text-lables text-secondary3 ">
				Project {i} <p className="text-code text-line">//_{title}</p>
			</p>
			<div className=" bg-primary3 rounded-b-2xl border border-line h-fit pb-3 w-fit flex flex-col gap-2 items-center ">
				{image}
				<p className="px-3">{desc}</p>
				<a
					href={demoUrl}
					className="button-default w-36"
					target="_blank"
					rel="noopener noreferrer"
				>
					демо
				</a>
			</div>
		</div>
	);
}

export default Project;
