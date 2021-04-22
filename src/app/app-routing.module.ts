import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent} from './components/Agenda/Agenda.component';
import { AgregarContactoComponent} from './components/AgregarContacto/AgregarContacto.component';

const routes: Routes = [
  {
    path : 'new', component : AgendaComponent
  },
  {
    path : 'add', component : AgregarContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
