import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { CountEmpleadosComponent } from './components/empleado-list/count-empleados/count-empleados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoModificarComponent } from './components/empleado-update/empleado-modificar.component';
import { EmpleadoDeleteComponent } from './components/empleado-delete/empleado-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListComponent,
    CountEmpleadosComponent,
    EmpleadoModificarComponent,
    EmpleadoDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
