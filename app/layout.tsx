import Header from "@/components/Header";
import "./globals.scss";
import { Fira_Code } from "next/font/google";
import Footer from "@/components/Footer";

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
