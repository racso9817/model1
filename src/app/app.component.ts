import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {
  title = 'model1';
  public isMenuCollapsed = true;

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

}
