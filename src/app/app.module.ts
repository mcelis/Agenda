import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './components/Agenda/Agenda.component';
import { AgregarContactoComponent } from './components/AgregarContacto/AgregarContacto.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    AgregarContactoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
