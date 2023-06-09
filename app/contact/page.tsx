
import CodeHighlighter from "@/components/CodeHighlighter";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Напиши Мне",
	description: "Оставь заявку в Shankin Studio",
};

function Contact() {
	return <div className=" bg-transparent">
		<CodeHighlighter code="const me = dodik"/>

	</div>;
}

export default Contact;
