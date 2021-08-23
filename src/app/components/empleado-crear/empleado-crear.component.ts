import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-crear',
  templateUrl: './empleado-crear.component.html',
  styleUrls: ['./empleado-crear.component.css']
})
export class EmpleadoCrearComponent implements OnInit {

  @Input() lista:Empleado[] = [];
  legajoEliminar:string='-1';
  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      legajo:['', [Validators.required]],
      apellido:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  VerArreglo()
  {
    
  }
  buscarElemento(aBuscarLegajo: any):number
  {
    var i=0;
    var flag=0;
    var pos=-1;
    for(i=0;  i<this.lista.length  && flag==0 ;i++)
    {
      if(this.lista[i].Legajo.toString() === aBuscarLegajo)
      {
        flag=1;
        pos=i;
      }
    }
    return pos;
  }
  eliminarElemento(desde:number)
  {
    this.lista.splice(desde,1);
  }

  controladorEliminar()
  {
    this.legajoEliminar = this.form.get('legajo')?.value;
    console.log(this.legajoEliminar);
    var posicion = this.buscarElemento(this.form.get('legajo')?.value);
    if(posicion!=-1)
      this.eliminarElemento(posicion);
  }
}
