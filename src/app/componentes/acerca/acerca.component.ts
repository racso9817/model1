import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h1 class="modal-title">{{name}}</h1>      
    </div>
    <div class="modal-image text-center mt-3">
      <img src="{{image}}" alt="">
    </div>
    <div class="modal-body text-center">
      <h3>{{description}}</h3>
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
export class AcercaComponent implements OnInit {

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

  //animation for title
  // observer = new IntersectionObserver(entries => {
  //   // Loop over the entries
  //   entries.forEach(entry => {
  //     // If the element is visible
  //     if (entry.isIntersecting) {
  //       // Add the animation class
  //       entry.target.classList.add('animated');
  //     }
  //   });
  // });

  reveal(){
    var reveals = document.querySelectorAll('#title');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  ngOnInit() {
    //this.observer.observe(document.querySelectorAll('#title')[0]);
    window.addEventListener("scroll", this.reveal);
    // To check the scroll position on page load
    this.reveal();
  }

}
