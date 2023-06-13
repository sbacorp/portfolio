import { Metadata } from "next";
import Dropdown from "@/components/dropdown";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
export const metadata: Metadata = {
	title: "Напиши Мне",
	description: "Оставь сообщение на Shankin Dev",
};
function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full h-full flex flex-col">
			<div className="flex flex-grow flex-col lg:flex-row h-full">
				<aside className="aside w-full min-w-[256px] min-w  lg:w-64 border-r border-solid border-line">
					<Dropdown
						title="Контакты"
						items={[
							<a className="flex items-center gap-1" href="#name">
								<BiMailSend className="h-4 w-4" />
								Почта
							</a>,
							<a className="flex items-center gap-1" href="tel:+79957942415">
								<BiPhoneCall className="h-4 w-4" />
								+7(995)7942415
							</a>,
						]}
					/>
				</aside>
				<div className="flex flex-col flex-grow h-full justify-center items-evently">
					{children}
				</div>
			</div>
		</div>
	);
}
export default layout;
