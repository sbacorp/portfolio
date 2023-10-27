import Header from "@/app/components/Header";
import "./globals.scss";
import { Fira_Code } from "next/font/google";
import Footer from "@/app/components/Footer";
import teamTasks from "@/public/rolling.png";
import yt from "@/public/yt.png";
import club from "@/public/club.png";
import pizza from "@/public/react_pizza.png";
import Image from "next/image";
import { IProject } from "@/types";
const fira = Fira_Code({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-fira-code",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	
	return (
		<html lang="en" className={`${fira.variable}`}>
			<body className="text-grey overflow-x-hidden w-screen h-screen bg-primary1 px-1 py-2">
				<div className="scroll mx-auto relative bg-primary2 h-full rounded-md border border-line flex flex-col pt-12 overflow-y-hidden  overflow-x-hidden">
					<Header />
					<main className="w-full flex-grow flex items-center flex-col justify-center overflow-y-auto scroll h-fit">
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}

export const projects: IProject[] = [
	{
		i: 2,
		title: "youtube-clone",
		desc: "The YouTube Clone project is a web application that replicates the core functionalities of YouTube, allowing users to search and watch videos.",
		image: <Image placeholder="blur" src={yt} alt={"youtube-clone"} />,
		demoUrl: "https://yt-clonee.vercel.app/",
		gitUrl: "https://github.com/sbacorp/youtube-clone",
		keyFeatures:
			"Video Search: Users can enter search queries to find videos of interest. The application communicates with the YouTube API v3 to fetch and display search results. Video Playback: Selected videos can be played directly within the application. The React Player library is used to embed and control the video playback experience. Material-UI Components: Material-UI is a comprehensive UI component library that follows the principles of Google's Material Design. It offers a wide range of pre-designed components, including icons, buttons, and cards, which can be easily integrated into your application.",
		technologies:
			"- React.js: The project is developed using React.js, a popular JavaScript library for building user interfaces. React component-based architecture and virtual DOM enable efficient rendering and data management. - React Player: React Player is a library that provides a React component for embedding and controlling video playback. It supports various video formats and offers features like play, pause, seek, and volume control. - Emotion: Emotion is a CSS-in-JS library that allows you to write styles as JavaScript code. It provides powerful styling capabilities, including support for nested selectors, theming, and dynamic styles. - Material-UI: Material-UI is a widely used UI component library based on Google's Material Design principles. It offers a rich collection of pre-designed components and styling options, enabling the creation of visually appealing and consistent user interfaces. - YouTube API v3: The project interacts with the YouTube API v3 to fetch video data, perform search queries, and retrieve metadata such as video titles, descriptions, and thumbnails. This integration allows users to access real-time video content from YouTube.",
		conclusion:
			"By working with libraries like React Player, Emotion, and Material-UI, and integrating the YouTube API v3, the YouTube Clone project demonstrates my ability to utilize popular tools and APIs to create a functional and visually appealing application that mimics the core features of YouTube.",
	},
	{
		i: 1,
		title: "team-tasks",
		desc: "The Task Manager project is a Kanban-style task management application that allows users to organize their tasks and track their progress.",
		image: <Image placeholder="blur" src={teamTasks} alt={"task-manager"} />,
		demoUrl: "https://team-tasks.vercel.app/",
		gitUrl: "https://github.com/sbacorp/task-manager",
		keyFeatures:
			"Task Management: Users can create, edit, and delete tasks within each column. They can assign due dates, add descriptions, and set task priorities to effectively manage their workflow.\n User Authentication: The Task Manager includes a user authentication system that allows users to sign up, log in, and securely access their personalized task boards. User authentication ensures data privacy and allows users to have their own customized task management experience.\n Responsive Design: The application is built with a responsive design approach, ensuring optimal user experience across various devices and screen sizes.",
		technologies:
			"- React (Next.js): The project is built using React with the Next.js framework, providing server-side rendering, optimized routing, and other performance benefits.\n - Redux/React Context: State management libraries like Redux, Zustand, or React Context are utilized to efficiently manage the application's state and ensure data consistency.\n - Tailwind CSS/SCSS: The styling of the Task Manager is achieved using Tailwind CSS or SCSS, enabling rapid development and creating a modern and visually appealing user interface.\n - React Hook Forms: Form handling and validation are implemented using React Hook Forms, allowing for a smooth and intuitive user experience when creating or updating tasks.\n- TypeScript: The project is developed using TypeScript, providing static typing and enhanced code integrity, which helps catch errors early in the development process.",
		conclusion:
			"The Task Manager project showcases my ability to utilize React (Next.js), Redux/React Context, Tailwind CSS/SCSS, React Hook Forms, and TypeScript to create a practical and user-friendly application. It demonstrates my proficiency in building interactive interfaces, managing state, and implementing key features like user authentication.",
	},
	{
		i: 3,
		title: "pizza-ordering-store",
		desc: "The Pizza Ordering Store project is a web application that allows users to order pizzas online.",
		image: (
			<Image placeholder="blur" src={pizza} alt={"pizza-ordering-store"} />
		),
		demoUrl: "https://react-pizza-app-five.vercel.app/",
		gitUrl: "https://github.com/sbacorp/react-pizza-app",
		keyFeatures:
			"Pizza Selection: React.js provided a component-based architecture, allowing me to create reusable pizza components and efficiently handle the dynamic rendering of pizza options. TypeScript ensured type safety and helped catch errors during development, resulting in a reliable and bug-free pizza selection feature.\n Shopping Cart: Redux played a vital role in managing the shopping cart state. By leveraging Redux, I was able to store and update the cart items across different components, providing a seamless shopping experience for users. TypeScript's static typing further enhanced the cart functionality by preventing common data-related issues.\n Responsive Design: By utilizing SASS, I leveraged its advanced styling capabilities to create a responsive design that adapts to different screen sizes. This ensured an optimal user experience across various devices, including desktops, tablets, and mobile phones.",
		technologies:
			"- React.js: React.js empowered the creation of reusable components and facilitated the dynamic rendering of pizza options, resulting in an interactive and visually appealing user interface.\n- TypeScript: TypeScript added static typing to the JavaScript codebase, ensuring type safety and improving code integrity throughout the project.\n- Redux: Redux enabled centralized state management for the shopping cart, ensuring seamless data flow and providing a consistent shopping experience for users.\n- React Router DOM: React Router DOM facilitated client-side routing, allowing for smooth navigation between different pages and the implementation of secure user authentication.\n- Axios: Axios served as the HTTP client for making API requests, enabling seamless communication with server-side APIs and ensuring efficient order placement and data retrieval.\n- SASS: SASS enhanced the styling capabilities of the application, providing modular and reusable styles, which resulted in a visually appealing and responsive design.",
		conclusion:
			"The Pizza Ordering Store project demonstrates my ability to leverage React.js, TypeScript, and Redux to overcome various challenges and deliver a feature-rich and user-friendly pizza ordering experience. By utilizing these technologies, I achieved a seamless pizza selection process, efficient shopping cart management, secure user authentication, and reliable order placement, all within a responsive and visually appealing application.",
	},
	{
		i: 4,
		title: "mega",
		desc: "he Computer Club Network Website project is my first project developed using React.js. It served as a platform to improve my skills and knowledge in React.js, enhance my web development abilities, and gain experience in front-end development and styling.",
		image: <Image placeholder="blur" src={club} alt={"Mega"} />,
		demoUrl: "https://mega-premium.vercel.app/",
		gitUrl: "https://github.com/sbacorp/mega-app",
		keyFeatures:
			"React.js Components: The project extensively utilizes React.js components to create a modular and reusable codebase. By breaking down the website into smaller components, I improved code organization, readability, and maintenance. \n Responsive Design: I focused on implementing a responsive design approach using CSS and styling libraries like SASS. This allowed the website to adapt seamlessly to different screen sizes and devices, ensuring a consistent and user-friendly experience for visitors. \n Improved Styling Skills: Through the project, I dedicated time to enhance my styling skills. By utilizing CSS, SASS, and the framer-motion library, I incorporated beautiful animations into the website. These animations added a visually appealing and dynamic element, enhancing the overall user experience. \n Page Navigation: React Router DOM was employed to handle client-side routing and enable smooth navigation between different pages of the website. This provided a seamless browsing experience for users and improved overall usability.\n Content Presentation: Leveraging React.js's component-based architecture, I effectively presented the content of the Computer Club Network, highlighting its services, events, and unique features. The website structure and layout were designed to engage and inform visitors.",
		technologies:
			"- React.js: React.js served as the primary framework for developing the website, enabling the creation of dynamic and interactive user interfaces. \n - HTML/CSS/SASS: HTML and CSS were utilized for structuring and styling the website. SASS enhanced the styling capabilities, providing features like variables, mixins, and nesting to improve code efficiency and maintainability. \n - React Router DOM: React Router DOM facilitated client-side routing, enabling seamless navigation between different pages and improving the overall user experience. \n - Framer Motion: Framer Motion, a powerful animation library, was incorporated into the project. It allowed me to create captivating animations and transitions, bringing life and interactivity to various elements of the website.",
		conclusion:
			"The Computer Club Network Website project allowed me to apply my knowledge of React.js, improve my web development skills, and enhance my abilities in styling and creating visually appealing layouts. With the addition of Framer Motion, I was able to incorporate stunning animations, adding a touch of creativity and delight to the user experience. Through the project, I gained valuable experience in component-based development, responsive design, client-side routing, and animation implementation.",
	},
];
