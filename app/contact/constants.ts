export const formFields = [
	{
		label: "_Name:",
		id: "name",
		type: "text",
		placeholder: "Your name",
		errorText: "This field is required",
		validation: { required: true, maxLength: 80 },
	},
	{
		label: "_Email:",
		id: "email",
		type: "text",
		placeholder: "Email address",
		errorText: "This field is required",
		patternErrorText: "There should be an Email",
		validation: { required: true, pattern: /^\S+@\S+$/i },
	},
	{
		label: "_Message:",
		id: "message",
		type: "textarea",
		placeholder: "Message",
		errorText: "This field is required",
		validation: { required: true },
	},
];
