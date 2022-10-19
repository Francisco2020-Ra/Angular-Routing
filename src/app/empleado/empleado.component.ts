import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent{

  titulo = "Listado de Empleados"

  constructor(
    private servicioEmpleado:ServicioEmpleadosService,
    private servicioDataEmpleado: EmpleadosService){

      this.empleados = this.servicioDataEmpleado.empleados;
    }

    empleados:Empleado[] = [];


  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)

    //this.servicioEmpleado.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

    this.servicioDataEmpleado.agregarEmpleadoServicio(miEmpleado);

  }
  cuadroNombre: string = "";
  cuadroApellido: string = ""
  cuadroCargo: string = "";
  cuadroSalario: number = 0;



}
