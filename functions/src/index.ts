import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as admin from "firebase-admin";
admin.initializeApp();

exports.sendEmailNotification = functions.firestore
    .document("submissions/{docId}")
    .onCreate((snap:any) => {
      const data = snap.data();
      const authData = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "pruebamodel1@gmail.com",
          pass: "holaModel1",
        },
      });
      authData.sendMail({
        from: "pruebamodel1@gmail.com",
        to: "pruebamodel1@gmail.com",
        subject: "Your submission Info",
        text: `${data.email}`,
        html: `${data.email}`,
      }).then(() => console.log("successfully sent that mail"))
          .catch((err: any) => console.log(err));
    });
