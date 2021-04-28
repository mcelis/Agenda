import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent} from './components/Agenda/Agenda.component';
import { AgregarContactoComponent} from './components/AgregarContacto/AgregarContacto.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {
    path : '', component : AgendaComponent
  },
  {
    path : 'new', component : AgendaComponent
  },
  {
    path : 'formulario', component : FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
