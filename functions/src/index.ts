import * as functions from "firebase-functions";
const nodemailer = require("nodemailer");
const admin = require("firebase-admin")
admin.initializeApp()

exports.sendEmailNotification = functions.firestore.document("submissions/{docId}")
    .onCreate((snap, ctx) => {
        const data = snap.data();
        let authData = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "pruebamodel1@gmail.com",
                pass: "holaModel1",
            }
        });
        authData.sendMail({
            from: "info.form@formemail.com",
            to: `${data.email}`,
            subject: "Your submission Info",
            text: `${data.email}`,
            html: `${data.email}`,
        }).then(() => console.log("successfully sent that mail")).catch((err: any) => console.log(err));

    });