import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './componentes/home/home.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { StaffComponent } from './componentes/staff/staff.component';
import { CasosComponent } from './componentes/casos/casos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
//FontAwesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
//Angular Material
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
//Forms Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//PrimeNG
import { CarouselModule } from 'primeng/carousel';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// Third party modules
import { AnimateOnScrollDirective, AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercaComponent,
    PageNotFoundComponent,
    ServiciosComponent,
    StaffComponent,
    CasosComponent,
    ContactoComponent,
    UbicacionComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    AccordionModule,
    NoopAnimationsModule,
    AnimateOnScrollModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
