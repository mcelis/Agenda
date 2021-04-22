import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';


@Component({
  selector: 'app-AgregarContacto',
  templateUrl: './AgregarContacto.component.html',
  styleUrls: ['./AgregarContacto.component.css']
})
export class AgregarContactoComponent implements OnInit {

  contacto: Contacto;
  constructor() { }

  ngOnInit() {
    this.contacto = new Contacto("Marco","Celis","Calle 12","m@gmail.com",300267765,false,"https://cdn.icon-icons.com/icons2/1378/PNG/128/avatardefault_92824.png");
  }

}
