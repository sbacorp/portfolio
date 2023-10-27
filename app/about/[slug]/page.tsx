import { Metadata } from "next";
import { Experience } from "@/types";
import TypingText from "@/components/Typing2";
type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t: Experience | undefined = experience.find(
    (el) => el.slug === params.slug
  );
  return {
    title: t?.title || "Info",
  };
}
export const revalidate = 60;
export default function SkillsInfo({ params: { slug } }: Props) {
  const skills: Experience | undefined = experience.find(
    (el) => el.slug === slug
  );
  return (
    <div className="h-full w-full px-6 text-code md:text-body pt-10 md:pt-60">
      <TypingText text={skills!.description} />
    </div>
  );
}
const experience: Experience[] = [
  {
    slug: "frontend",
    title: "Frontend",
    description:
      "I have a year of experience in frontend application development. The main tool I work with is Next.js. I am proficient in TypeScript and Redux, and use them to create scalable and maintainable projects. I am also experienced in using Tailwind CSS to style interfaces quickly and efficiently. My goal is to create custom web applications with a responsive and intuitive user interface.",
  },
  {
    slug: "database",
    title: "Databases",
    description:
      "My experience with databases is focused on PostgreSQL. I am familiar with creating and managing databases, designing tables, and optimizing queries. I am also familiar with using database administration tools such as pgAdmin. In my projects, I actively use PostgreSQL to store and retrieve data, ensuring application reliability and efficiency.",
  },
  {
    slug: "algorithms",
    title: "Algorithms",
    description:
      "Algorithms are an important part of my experience in software development. I have a deep understanding of various algorithmic approaches and data structures. I regularly solve algorithm problems on platforms such as LeetCode and HackerRank to maintain my skills in this area. My experience in algorithms helps me create efficient and optimized solutions, especially in critical parts of applications.",
  },
  {
    slug: "personalInfo",
    title: "personalInfo",
    description:
      "I am a frontend developer with a year of experience. I am proud of my profession and enjoy every aspect of my work. During this time I've been developing different projects and never cease to be amazed by the possibilities frontend provides. Over the course of my career, I've created several pet projects that have allowed me to expand my skills and experiment with different technologies and concepts. I'm always striving for self-improvement and looking for new ways to improve the user experience and efficiency of web applications. In addition to working on my own projects, I've also been freelancing, which has allowed me to work with a variety of clients and projects. This has given me valuable experience in communication, time management, and adapting to different project requirements. One of my passions is algorithms. I am passionate about learning and applying algorithmic solutions to my work. I am constantly looking for new algorithmic approaches and practicing their application in my projects. This helps me to create more efficient and optimized solutions. All this work and research activity allows me to continue to grow in my profession and succeed as a frontend developer. I'm proud of my achievements, but I'm also always open to new challenges and opportunities for growth and development.",
  },
];
