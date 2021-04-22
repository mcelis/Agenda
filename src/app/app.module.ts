import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './components/Agenda/Agenda.component';
import { AgregarContactoComponent } from './components/AgregarContacto/AgregarContacto.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    AgregarContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
