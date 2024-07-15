import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PASSWORD
    }
});

const sendMailTo = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.GMAIL_ACCOUNT,
        to,
        subject,
        text,
    };
    return await transporter.sendMail(mailOptions);
};

export default sendMailTo;
