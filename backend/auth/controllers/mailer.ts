import {SMTPClient} from 'emailjs'
import {app_password} from '../controllers/token'


const client = new SMTPClient({
    user: "tarinamikpoh@gmail.com",
    password: app_password, // Use an App Password if using Gmail
    host: "smtp.gmail.com",
    ssl: true,
});

const sendEmail = async (from: string, subject: string, message: string) => {
    try {
        const response = await client.sendAsync({
            text: message,
            from: from,
            to: "tarinamikpoh@gmail.com",
            subject: subject,
        });

        console.log("Email sent successfully:", response);
        return response;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};


export default sendEmail