import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicaEmpleadoCComponent } from './caracteristica-empleado-c/caracteristica-empleado-c.component';
import { FormsModule } from '@angular/forms';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadoHijoCComponent,
    CaracteristicaEmpleadoCComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
