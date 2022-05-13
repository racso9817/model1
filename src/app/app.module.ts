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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercaComponent,
    PageNotFoundComponent,
    ServiciosComponent,
    StaffComponent,
    CasosComponent,
    ContactoComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
