import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado/empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private servicioEmpleado: ServicioEmpleadosService,
    private servicioDataEmpleado: EmpleadosService,
    private route: ActivatedRoute) {

  }
  empleados: Empleado[] = [];

  ngOnInit(): void {

    this.empleados = this.servicioDataEmpleado.empleados;

    this.indice = this.route.snapshot.params['id']; // almacena el id del empleado a actualizar
    let empleado: Empleado = this.servicioDataEmpleado.encontrarEmpleado(this.indice) //construye un objeto de tipo empleado

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }



  volverHome() {
    this.router.navigate(['']);
  }

  actualizaEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)

    //this.servicioEmpleado.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

    this.servicioDataEmpleado.actualizarEmpleado(this.indice, miEmpleado);

    this.router.navigate(['']);

  }

  eliminarEmpleado(){

    this.servicioDataEmpleado.eliminarEmpleado(this.indice);

    this.router.navigate(['']);

  }
  cuadroNombre: string = "";
  cuadroApellido: string = ""
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  indice: number = 0;

}
