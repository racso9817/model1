import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as admin from "firebase-admin";
admin.initializeApp();
require('dotenv').config();

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
        from: `${data.email}`,
        to: "pruebamodel1@gmail.com",
        subject: `Mensaje de ${data.nombre} ${data.apellido}`,
        text: `Nombre: ${data.nombre} Apellido: ${data.apellido} \nEmail: ${data.email} \nCelular: ${data.celular} \nMensaje: ${data.mensaje}`,
        html: `<b>Nombre:</b> ${data.nombre} ${data.apellido} <br><b>Email:</b> ${data.email} <br><b>Celular:</b> ${data.celular} <br><b>Mensaje:</b> ${data.mensaje}`,
      }).then(() => console.log("successfully sent that mail"))
          .catch((err: any) => console.log(err));
    });
