"use client";
import { Metadata } from "next";
import Project from "@/components/Project";
import { metadata } from "../page";
import { projects } from "./projectsData";
// export const metadata: Metadata = {
//   title: "Projects",
//   description: "Projects that I can show you",
// };

function page() {
  return (
    <div className="flex items-stretch justify-evenly flex-wrap gap-20 py-5 overflow-scroll">
      {projects.map((el, i) => (
        <Project key={i} {...el} />
      ))}
    </div>
  );
}

export default page;
