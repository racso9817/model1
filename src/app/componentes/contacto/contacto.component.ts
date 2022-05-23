import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'src/assets/smtp/smtp.js';
declare let emailText:any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {

  contactForm!: FormGroup;

  mensaje_alerta = {
    nombre: 'Debe ingresar un nombre',
    apellido: 'Debe ingresar un apellido',
    email: 'Debe ingresar un email',
    celular: 'Debe ingresar un celular',
    mensaje: 'Debe ingresar un mensaje',
  }

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required]),
    })
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
