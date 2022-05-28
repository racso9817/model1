import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';

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
 

  // get nombre(){
  //   return this.contactForm.get('nombre');
  // }
  // get apellido(){
  //   return this.contactForm.get('apellido');
  // }
  // get email(){
  //   return this.contactForm.get('email');
  // }
  // get celular(){
  //   return this.contactForm.get('celular');
  // }
  // get mensaje(){
  //   return this.contactForm.get('mensaje');
  // }

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
