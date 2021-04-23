import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';

@Component({
  selector: 'app-Agenda',
  templateUrl: './Agenda.component.html',
  styleUrls: ['./Agenda.component.css']
})
export class AgendaComponent implements OnInit {

  contactos:Array<Contacto>
  constructor() { }

  ngOnInit() {

    this.contactos = [
      new Contacto("Alejandra","Diaz","Calle 3 Carrera 4", "correo1@correo.com",3112345671,false,"https://as.com/tikitakas/imagenes/2020/12/18/portada/1608310631_342998_1608310869_noticia_normal_recorte1.jpg"),
      new Contacto("Pedro","Perez","Calle 3 Carrera 4", "correo2@correo.com",3112345672,true,"https://im-media.voltron.voanews.com/Drupal/02live-246/styles/sourced/s3/2019-08/C975CDD7-2C9F-4928-BED8-C412E3F68B20.jpg?itok=vesfvqKB"),
      new Contacto("Alicia","Benitez","Calle 3 Carrera 4", "correo3@correo.com",3112345673,false,"https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg")
    ]
  }

  borrarC(telefono: number){
    this.contactos = this.contactos.filter(i => i.telefono != telefono);
  }


}
