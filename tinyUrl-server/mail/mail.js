import nodemailer from "nodemailer";
// import userModel from "./Models/userModel";
// import {mailTemplate1} from ''
import registerEmail from './mailContext/registerEmail.js'
import addLinkEmail from './mailContext/addLinkEmail.js'

const fromMail = "tinyurl.em@gmail.com";
const password = "mqixwjdsxxylcmag";
const MailSender = {
    sendEmail:async(name,sendToEmail, )=>{
        console.log('send email', sendToEmail)
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: fromMail,
            pass: password,
            },
        });

        let info = await transporter.sendMail({
            from: fromMail,
            to: sendToEmail, // list of receivers
            subject: "TinyUrl",
            // text: "it is my tiny url app", // plain text body
            html: addLinkEmail(name)
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    },



    sendEmailTarget:async(name,sendToEmail)=>{
        console.log('send email')

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: fromMail,
            pass: password,
            },
        });

        let info = await transporter.sendMail({
            from: fromMail,
            to: sendToEmail, // list of receivers
            subject: "tiny Url", // Subject line
            text: "it is my tiny url app", // plain text body
            html: "<b>it is my tiny url app</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    },


    sendEmailRegister:async(name,sendToEmail)=>{
        console.log('send email')

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user:fromMail,
            pass: password,
            },
        });

        let info = await transporter.sendMail({
            from: fromMail,
            to: sendToEmail, // list of receivers
            subject: "rgister- tiny url",
            text: "it is my tiny url app", // plain text body
            html: registerEmail(name)
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    },
}

export default MailSender