import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-modificar',
  templateUrl: './empleado-modificar.component.html',
  styleUrls: ['./empleado-modificar.component.css']
})
export class EmpleadoModificarComponent implements OnInit {

  form:FormGroup;

  @Input() listaModificar: Empleado[] = [];

  constructor(private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      legajo:['', [Validators.required]],
      apellido:['', Validators.required],
      nombre:['',Validators.required],
      sexo: ['', Validators.required],
      salario:['', Validators.required]
    })
    
  }
  ngOnInit(): void {
  }

  buscarElemento(aBuscarLegajo: any):Empleado
  {
    var i=0;
    var flag=0;
    var pos=-1;
    for(i=0;  i<this.listaModificar.length  && flag==0 ;i++)
    {
      if(this.listaModificar[i].Legajo.toString() === aBuscarLegajo)
      {
        flag=1;
        pos=i;
      }
    }
    return this.listaModificar[pos];
  }
  completarBusqueda()//:Empleado
  {
    var emp: Empleado =  this.buscarElemento(this.form.get('legajo')?.value)
    this.form.patchValue(
      {
        legajo: emp.Legajo,
        apellido: emp.Apellido,
        nombre: emp.Nombre,
        sexo: emp.Sexo,
        salario: emp.Salario
      }
    );

    /*const e:Empleado = {
      Nombre: this.form.get('nombre')?.value,
      Apellido: this.form.get('apellido')?.value,
      Legajo: this.form.get('legajo')?.value,
      Salario: this.form.get('salario')?.value,
      Sexo: this.form.get('sexo')?.value
    }
    return e; */   
  }
  buscarElementoPos(aBuscarLegajo: any):number
  {
    var i=0;
    var flag=0;
    var pos=-10;
    for(i=0;  i<this.listaModificar.length  && flag==0 ;i++)
    {
      console.log("Legajo: " + this.listaModificar[i].Legajo);
      if(this.listaModificar[i].Legajo === aBuscarLegajo)
      {
        flag=1;
        pos=i;
      }
    }
    return pos;
  }
  modificar()
  {
    //var emp = this.completarBusqueda();
    const emp:Empleado = {
      Nombre: this.form.get('nombre')?.value,
      Apellido: this.form.get('apellido')?.value,
      Legajo: this.form.get('legajo')?.value,
      Salario: this.form.get('salario')?.value,
      Sexo: this.form.get('sexo')?.value
    }
    var pos = this.buscarElementoPos(emp.Legajo);
    console.log("Posicion: " + pos);
    this.listaModificar.splice(pos, 1, emp);
  }
}
