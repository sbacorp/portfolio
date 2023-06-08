import Header from "@/components/Header";
import "./globals.scss";
import { Fira_Code } from "next/font/google";
import Footer from "@/components/Footer";

const fira = Fira_Code({ subsets: ["latin"] });


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${fira.className} flex items-center justify-center  overflow-hidden w-screen h-screen bg-primary1`}
			>
				<div className=" bg-primary2 h-[95%] w-[97%] rounded-md border border-solid border-line flex flex-col items-center justify-center  overflow-hidden">
					<Header />
					<main className="flex-grow flex items-center flex-col justify-center">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
