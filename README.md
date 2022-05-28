# model1
modelo básico para abogados

## TODO List
- Hacer el footer
- Agregar un componente de ubicacion
- Terminar el diseño del componente acerca de nosotros
- Diseñar los demás componentes
- Agregar un botón flotante de whatsapp
- Agregar sombreado debajo de la barra de nav


# Aplicacion de Firebase functions para enviar email(Pasos a seguir)
1. Crear un proyecto en firebase, con el nombre deseado del proyecto que se va a crear. (Ejemplo: "modelo-basico-abogados").
2. En la terminal de visual studio, instalar el cli de firebase con angular. El comando:

  npm i @angular/fire

Luego de hacer esto, se debera ir a la consola de firebase y crear una nueva aplicación. Cuando esta este lista, se debera ir a la consola de firebase y habilitar la opcion de firestore. Luego de esto, no olvidarse de agregar en la carpeta "environments/environment.ts" la key de firebase. Esta puede ser obtenida en la consola de firebase o  en las opciones de la consola. **Un ejemplo asi:**

export const environment = {
  production: false,
    firebaseConfig: {
    apiKey: 'AIzaSyCQjPK69g4XDmbiSoG2VRs_LcYEpepN0Jk',
    authDomain: 'negocio-4af6e.firebaseapp.com',
    projectId: 'negocio-4af6e',
    storageBucket: 'negocio-4af6e.appspot.com',
    messagingSenderId: '469707044430',
    appId: '1:469707044430:web:470cd13b3bdb5ef793751f',
    measurementId: 'G-TYD1SEK8H2'
  }
};


3. De vuelta a la terminal de visual studio, instalar tambien los tools de firebase con el comando: npm i firebase-tools
4. Luego de esto pasar a hacer log in a firebase, basicamente conectar los tools con la aplicacion que se creo de firebase.
5. Para esto, tendremos que poner el comando: firebase login 
6. Seguir los pasos, iniciar sesion y vincular la cuenta.
7. Luego de firebase login, hay que poner el comando: firebase init 
8. Seguir los pasos y crear la aplicacion. No olvidarse de seleccionar "Functions" y "Typescript y "use an existing project". Recordar
que estamos usando las funciones de firebase.
9. Esto nos creara una carpeta en el root llamada "functions". La cual va a ser donde se pongan las funciones.
10. Para esto, trabajaremos en el archivo "index.ts" que se encuentra dentro de la carpeta "src". El path es : functions/src/index.ts.
11. A la vez, para poder trabajar y mandar las funciones, se debe entrar a la carpeta "functions". Simplemente un "cd functions".
12. Al estar dentro de functions, se debe instalar otra libreria llamada nodemailer con el codigo siguiente:  npm i nodemailer
13. Node mailer es lo que nos ayudara para poder enviar el email.
14. **En index.ts se debe de ingresar el siguiente codigo:**

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

15. Este es el codigo que servira para el envio de correos al database de firebase y al email.
16. Luego de esto nos iremos al ts. file del componente en donde se encuentre el formulario.
17. **Dentro del ts. file , deberan de estar estos imports.**
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

18. **A la vez, estas declaraciones:**

  private submissionForm!: AngularFirestoreCollection<any>;

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {

  }

19. **y en "submissionForm!" es donde se pondra el nombre del formulario, como tambien en "contactForm!" donde se hara referencia al FormGroup para el HTML**
20. Luego de esto seguir y copiar este codigo:

 ngOnInit(): void {
   
    this.submissionForm = this.firestore.collection('submissions');
    this.contactForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required]),
      
    });
  }

   mensaje_alerta = {
    nombre: 'Debe ingresar un nombre',
    apellido: 'Debe ingresar un apellido',
    email: 'Debe ingresar un email',
    celular: 'Debe ingresar un celular',
    mensaje: 'Debe ingresar un mensaje',
  }

    submitting = false;
    submitted = false;

    submitData(value: any) {
    console.log(this.submitted);

    this.submitting = true;
    this.submissionForm.add(value).then(res => {
      this.submitted = true;
    }).catch(err => console.log(err)
    ).finally(() => {
      this.submitting = false;
    });
    window.alert("Correo enviado");
    this.contactForm.reset();
  }
}

21. Por ultimo, digigirse al HTML del componente del formulario. Y agregar [formGroup]="contactForm"> al inico del <form>, para que se pueda hacer referencia al FormGroup. 
22. Y tambien agregar el siguiente codigo **dentro del boton** para que haga referencia y el submit se mande al presionar el boton.

**value="Submit" (click)="submitData(contactForm.value)" type="submit" [disabled]="!contactForm.valid"**

23. Luego de haber realizado estos pasos, estando aun dentro de "functions". En la terminal escribir este codigo:

    firebase deploy --only functions

    Tambien se puede usar:

    firebase deploy

24. Esperar a que se termine el proceso. y cuando se finalice simplemente tratar de enviar el formulario en el localhost y esperar el email.
