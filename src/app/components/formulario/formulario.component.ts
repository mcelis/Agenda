import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre:string;
  apellido:string;
  direccion:string;
  correo:string;
  telefono:number;
  bloqueado:boolean;
  foto:string;
  contacto:Contacto;
  constructor(private router: Router) { }

  ngOnInit() {
    this.nombre = "Este es un mensajes!";
    this.contacto = new Contacto("","","","",23445,false,"");
  }

  asignarContacto(){
    this.contacto.nombre = this.nombre;
    this.contacto.apellidos = this.apellido;
    this.contacto.direccion = this.direccion;
    this.contacto.correo = this.correo;
    this.contacto.telefono = this.telefono;
    this.contacto.foto = this.foto;
    this.contacto.bloqueado = false;
    let contactos:Array<Contacto>;
    contactos = JSON.parse(localStorage.getItem("agenda"));
    let aux = contactos.filter(x => x.telefono == this.contacto.telefono);
    if(aux.length > 0){
      alert("El numero de telefono ya se encuentra en la agenda");
    }
    console.log("Contacto: " , this.contacto);
  }

}
