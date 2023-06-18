import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const { name, email, message } = await req.json();
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: email,
			to: "shankin.contact@gmail.com",
			subject: `Contact form submission from ${name}`,
			html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
		});
	} catch (error: unknown) {
		if (typeof error === "string") {
			return NextResponse.json({ error });
		} else {
			return NextResponse.json({ error: "An unknown error occurred." });
		}
	}
	return NextResponse.json({ message: "ok" });
}
