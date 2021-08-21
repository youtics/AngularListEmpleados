import { Empleado } from './../../models/Empleado';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  form:FormGroup;

  listaDeEmpleados: Empleado[] = [
    { Legajo:1, Nombre:'Gabriel', Apellido:'Chaldu', Sexo:'Masculino', Salario: 25000 },
    { Legajo:2, Nombre:'Juana', Apellido:'Fernandez', Sexo:'Femenino', Salario: 15000 },
    { Legajo:3, Nombre:'Gabriel', Apellido:'Garcia', Sexo:'Masculino', Salario: 2000 },
    { Legajo:4, Nombre:'Alejandra', Apellido:'Lucero', Sexo:'Femenino', Salario: 125000 },
    { Legajo:5, Nombre:'Alejandra', Apellido:'Lucero', Sexo:'Femenino', Salario: 125000 },
    { Legajo:6, Nombre:'Alejandra', Apellido:'Lucero', Sexo:'Femenino', Salario: 125000 },
  ]
  radioButtonSeleccionado = 'Todos';

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
  obtenerTotalEmpleados():number
  {
    return this.listaDeEmpleados.length;
  }
  obtenerMasculinos():number
  {
    var i=0;
    var masculinos=0;
    for(i=0 ;i < this.listaDeEmpleados.length; i++)
    {
      if(this.listaDeEmpleados[i].Sexo==='Masculino')
      {
        masculinos++;
      }
    }
    return masculinos;
  }
  obtenerFemeninos():number
  {
    return this.listaDeEmpleados.filter(list => list.Sexo === 'Femenino').length;
  }

  filtroXSexo(radioButtonSelect:string):void
  {
    this.radioButtonSeleccionado=radioButtonSelect;
  }

  agregarEmpleadoalArray()
  {
    const e:Empleado = {
      Nombre: this.form.get('nombre')?.value,
      Apellido: this.form.get('apellido')?.value,
      Legajo: this.form.get('legajo')?.value,
      Salario: this.form.get('salario')?.value,
      Sexo: this.form.get('sexo')?.value
    }    
    this.listaDeEmpleados.push(e);
  }
}
