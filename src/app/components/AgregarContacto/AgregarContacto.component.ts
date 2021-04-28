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
  @Output() eventoBloquear = new EventEmitter<Contacto>();
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  bloquearContacto(contacto:Contacto){
    this.eventoBloquear.emit(contacto);
  }
  eliminarContacto(telefono: number){
    this.borrarContacto.emit(telefono);
  }

}
