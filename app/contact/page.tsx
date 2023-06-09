"use client";

import { useForm } from "react-hook-form";
import { Metadata } from "next";
import CodeHighlighter from "@/components/CodeHighlighter";
import { IInputs, formFields } from "./constants";
export const metadata: Metadata = {
	title: "Напиши Мне",
	description: "Оставь заявку в Shankin Studio",
};

export default function Contact() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IInputs>();

	const onSubmitForm = async (data: IInputs) => {
		try {
			const res = await fetch(`api/contact`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const { error } = await res.json();
			if (error) {
				console.log(error);
				return;
			}
		} catch (error) {
			console.log(error);
		}
	};
	const name = watch("name");
	const email = watch("email");
	const message = watch("message");
	const code = `const button = document.querySelector('#sendBtn');
const message = {
	name: "${name}",
	email: "${email}",
	message: "${message}",
}

button.addEventListener('click', () => {
	form.send(message);
})`;
	return (
		<div className="flex flex-col flex-grow">
			<header className="hidden lg:block w-full h-10 border-b border-solid border-line">
				<span className="hidden lg:flex items-center justify-center px-3 text- w-fit h-full border-r border-solid border-line shrink-0">
					Контакты
				</span>
			</header>
			<main className="flex flex-grow items-center justify-center">
				<div className="form px-5 md:w-2/5 w-full h-full flex items-center justify-center">
					<form
						className="flex flex-col text-grey gap-2 h-fit w-72 md:w-96"
						onSubmit={handleSubmit(onSubmitForm)}
					>
						{formFields.map((field) => (
							<div key={field.id} className="flex flex-col gap-0.5">
								<label htmlFor={field.id}>{field.label}</label>
								{field.type === "textarea" ? (
									<textarea
										id={field.id}
										placeholder={field.placeholder}
										className="inputForm resize-none h-36"
										{...register(field.id as keyof IInputs, field.validation)}
									/>
								) : (
									<input
										id={field.id}
										type={field.type}
										placeholder={field.placeholder}
										className="inputForm"
										{...register(field.id as keyof IInputs, field.validation)}
									/>
								)}
								{errors[field.id as keyof IInputs]?.type === "required" && (
									<p className="text-code">{field.errorText}</p>
								)}
								{errors[field.id as keyof IInputs]?.type === "pattern" && (
									<p className="text-code">{field.patternErrorText}</p>
								)}
							</div>
						))}
						<input className="button-default" type="submit" />
					</form>
				</div>
				<div className="code_gen grow-0 shrink w-3/5  hidden lg:flex h-full items-center justify-center border-l border-solid border-line">
					<CodeHighlighter code={code} />
				</div>
			</main>
		</div>
	);
}
