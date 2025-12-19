import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendMail() {
    try {
        const info = await transporter.sendMail({
            from: `"BEST Puducherry" <${process.env.EMAIL_USER}>`,
            to: "9921008132@klu.ac.in",   // <-- Updated recipient
            subject: "BEST Puducherry Notification",
            text: "Hello! This is a test email sent to your KLU email.",
            html: "<b>Hello! This is a test email sent to your KLU email.</b>"
        });

        console.log("Message sent:", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

sendMail();
