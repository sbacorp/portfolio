export const formFields = [
	{
		label: "_Имя:",
		id: "name",
		type: "text",
		placeholder: "Ваше имя",
		errorText: "Поле обязательно для заполнения",
		validation: { required: true, maxLength: 80 },
	},
	{
		label: "_Почта:",
		id: "email",
		type: "text",
		placeholder: "Адрес электронной почты",
		errorText: "Поле обязательно для заполнения",
		patternErrorText: "Здесь должна быть почта",
		validation: { required: true, pattern: /^\S+@\S+$/i },
	},
	{
		label: "_Сообщение:",
		id: "message",
		type: "textarea",
		placeholder: "Сообщение",
		errorText: "Поле обязательно для заполнения",
		validation: { required: true },
	},
];
