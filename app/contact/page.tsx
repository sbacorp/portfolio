"use client";
import { useForm } from "react-hook-form";
import CodeHighlighter from "@/components/CodeHighlighter";
import { formFields } from "./constants";
import { useState } from "react";
import { IInputs } from "@/types";

export default function Contact() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [submitMessage, setsubmitMessage] = useState("");
	const [sending, setSending] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IInputs>();

	const onSubmitForm = async (data: IInputs) => {
		try {
			setSending(true);
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
				
				setsubmitMessage(
					"Произошла техническая ошибка, попробуйте написать в telegram"
				);
				return;
			} else {
				setsubmitMessage(
					"Спасибо за обращение! Мы уже читаем ваше сообщение и скоро ответим"
				);
			}
		} catch (error) {
			console.log(error);
			setsubmitMessage(
				"Произошла техническая ошибка, попробуйте написать в telegram"
			);
		} finally {
			setSending(false);
			setIsSubmitted(true);
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
		<main className="flex my-auto justify-evenly">
			<div className="form px-5 w-fit h-full flex items-center justify-center flex-col">
				{!isSubmitted ? (
					<>
						<form
							className="flex flex-col text-grey gap-2 h-fit w-72 lg::w-96"
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
							<input
								className={`button-default ${
									sending ? "loading" : ""
								}`}
								disabled={sending?true:false}
								type="submit"
							/>
						</form>
					</>
				) : (
					<>
						<p className=" text-subhead text-white text-center">Спасибо! 🤘</p>
						<p className="text-body text-center max-w-xs">{submitMessage}</p>
						<button
							className="button-default"
							onClick={() => setIsSubmitted(false)}
						>
							новое-сообщение
						</button>
					</>
				)}
			</div>
			<div className="hidden md:block self-center  h-fit">
				<CodeHighlighter code={code} />
			</div>
		</main>
	);
}
