export const FADE_DOWN_ANIMATION_SETTINGS = {
	initial: { y: -50, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: { duration: 0.2, type: "tween" },
};

export const FADE_IN_ANIMATION_SETTINGS = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration: 0.5, type: "spring" },
};

export const links = [
	{ href: "/", text: "_hello" },
	{ href: "/about/personalInfo", text: "_about-me" },
	{ href: "/projects", text: "_projects" },
	{ href: "/contact", text: "_contact-me" },
];