import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {

  images = [1048, 1059, 1075, 1076, 1078, 1081, 122, 193]//.map((n) => `https://picsum.photos/id/${n}/900/500`);
  carouselImg = [
    {
      img: 'assets/img/carousel/1.jpg',
      title: 'Titulo 1',
      subtitle: 'Subtitulo 1',
      description: 'Descripcion 1'
    },
  ];

  constructor(
    config: NgbCarouselConfig
  ) { 
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }

}
