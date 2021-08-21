import { EmpleadoListComponent } from './../empleado-list/empleado-list.component';
import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-crear',
  templateUrl: './empleado-crear.component.html',
  styleUrls: ['./empleado-crear.component.css']
})
export class EmpleadoCrearComponent implements OnInit {

  lista?: EmpleadoListComponent;
  constructor() { }

  ngOnInit(): void {
  }

  agregarEmpleadoalArray()
  {
    var e:Empleado = new Empleado(6,'Pepe', 'Lauau',2150,'Masculino');
    this.lista?.listaDeEmpleados.push(e);
  }
}
