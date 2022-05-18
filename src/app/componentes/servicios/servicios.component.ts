import { Component, OnInit } from '@angular/core';
import { IconProp, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass']
})
export class ServiciosComponent implements OnInit {


  serviciosC:{
    icon: IconName, 
    title: string,
    desc: string,
  } [] = [
    {
      icon:  'car',
      title: 'Defensa de seguros',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      icon:  'balance-scale',
      title: 'Negocios',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      icon:  'user-circle',
      title: 'Derecho civil',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      icon:  'address-card',
      title: 'Derecho laboral',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      icon:  'chart-line',
      title: 'Litigio comercial',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      icon:  'users',
      title: 'Familia',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      icon:  'home',
      title: 'Ordenamiento territorial',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      icon:  'book',
      title: 'Derecho constitucional',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },
    {
      icon:  'dollar-sign',
      title: 'Derecho tributario',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
    },

  ]

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll", this.animateServicios);
    this.animateServicios();
  }

  //animation for servicios
  animateServicios(){
    var servicios = document.querySelectorAll('.servicios');
    for (var i = 0; i < servicios.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = servicios[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        servicios[i].classList.add("fade-in");
      } else {
        servicios[i].classList.remove("fade-in");
      }
    }
  }

}
