import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';


@Component({
  selector: 'app-AgregarContacto',
  templateUrl: './AgregarContacto.component.html',
  styleUrls: ['./AgregarContacto.component.css']
})
export class AgregarContactoComponent implements OnInit {

  @Input() contacto = {} as Contacto; 
  @Output() borrarContacto = new EventEmitter<number>();
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  bloquear(contacto:Contacto){
    contacto.bloqueado = !contacto.bloqueado;
  }
  eliminarContacto(telefono: number){
    this.borrarContacto.emit(telefono);
  }

}
