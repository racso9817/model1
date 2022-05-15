import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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

}
