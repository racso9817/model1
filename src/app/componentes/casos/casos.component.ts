import { Component, OnInit } from '@angular/core';
import { IconProp, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.sass']
})
export class CasosComponent implements OnInit {

  testimonios:{
    icon: IconName, 
    text: string,
    img: string,
    nombre: string,
  } [] = [
  {
    icon: 'quote-left',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend nulla purus, eget sagittis quam porttitor vitae. Aliquam lorem risus, faucibus a enim eget, pulvinar lobortis nunc. Morbi porta, sem sed feugiat pharetra, diam lorem dictum tortor.',
    img: 'assets/imagenesP/hdhegod.jpg',
    nombre: 'Nombre 1',
  },
  {
    icon: 'quote-left',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend nulla purus, eget sagittis quam porttitor vitae. Aliquam lorem risus, faucibus a enim eget, pulvinar lobortis nunc. Morbi porta, sem sed feugiat pharetra, diam lorem dictum tortor.',
    img: 'assets/imagenesP/hdhegod.jpg',
    nombre: 'Nombre 2',
  },
  {
    icon: 'quote-left',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend nulla purus, eget sagittis quam porttitor vitae. Aliquam lorem risus, faucibus a enim eget, pulvinar lobortis nunc. Morbi porta, sem sed feugiat pharetra, diam lorem dictum tortor.',
    img: 'assets/imagenesP/hdhegod.jpg',
    nombre: 'Nombre 3',
  },]

  cards:{
    icons: IconName, 
    text1: string,
    text2: string,
  } [] = [ 
    {
      icons: 'heart',
      text1: '100',
      text2: 'Clientes satisfechos'
    },
    {
      icons: 'check-circle',
      text1: '30',
      text2: 'Casos ganados'
    },
    {
      icons: 'handshake',
      text1: '50',
      text2: 'Socios'
    },
    {
      icons: 'list',
      text1: '300',
      text2: 'Casos Finalizados'
    }
    ]

  constructor() {
   }

  ngOnInit(): void {
  }

}
