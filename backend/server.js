import express from 'express';
import bodyParser from 'body-parser'; // Default import
import { createTransport } from 'nodemailer';
import cors from 'cors';
import dotenv from "dotenv"

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    'http://localhost:5173',
    'https://sajjad1337.netlify.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'sajjadwork101@gmail.com', 
        pass: process.env.APP_PASS, 
    },
});

app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
  });
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, 
        to: 'sajjadwork101@gmail.com', 
        subject: `New Message from ${name}`, 
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});