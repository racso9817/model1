import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
declare let emailText:any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {

  private submissionForm!: AngularFirestoreCollection<any>;

  contactForm!: FormGroup;

  constructor(private firestore: AngularFirestore, private fb: FormBuilder) { }

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
 

  get nombre(){
    return this.contactForm.get('nombre');
  }
  get apellido(){
    return this.contactForm.get('apellido');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get celular(){
    return this.contactForm.get('celular');
  }
  get mensaje(){
    return this.contactForm.get('mensaje');
  }

  onSubmit(f: FormGroup){
    emailText.send({
      Host: 'smtp.gmail.com',
      Username: 'pruebamodel1@gmail.com',
      Password: 'holaModel1',
      To: 'pruebamodel1@gmail.com',
      From: 'pruebamodel1@gmail.com',
      Subject: 'Mensaje de contacto',
      Body : 'Nombre: ' + f.value.nombre + ' ' + f.value.apellido + '<br>' + 'Email: ' + f.value.email + '<br>' + 'Celular: ' + f.value.celular + '<br>' + 'Mensaje: ' + f.value.mensaje
    })
  }

}
