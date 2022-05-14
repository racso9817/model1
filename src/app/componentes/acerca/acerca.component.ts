import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{name}}</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-image text-center mt-3">
      <img src="{{image}}" alt="">
    </div>
    <div class="modal-body text-center">
      <p>{{description}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `,
  // styleUrls: ['']
})

export class NgbdModalContent {
  @Input() name:any;
  @Input() image:any;
  @Input() description:any;
  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.sass']
})
export class AcercaComponent {

  cardsList = [
    {
      img: 'assets/acerca/history1.jpg',
      name: 'Card 1',
      desc: 'Card 1 description'
    },
    {
      img: 'assets/acerca/history2.jpg',
      name: 'Card 2',
      desc: 'Card 2 description'
    },
    {
      img: 'assets/acerca/history3.jpg',
      name: 'Card 3',
      desc: 'Card 3 description'
    },
    {
      img: 'assets/acerca/history4.jpg',
      name: 'Card 4',
      desc: 'Card 4 description'
    },
  ]

  constructor(private modalService: NgbModal) { }

  open(num: number) {
    const modalRef = this.modalService.open(NgbdModalContent);  
    modalRef.componentInstance.name = this.cardsList[num].name;
    modalRef.componentInstance.image = this.cardsList[num].img;
    modalRef.componentInstance.description = this.cardsList[num].desc; 
  }

}
