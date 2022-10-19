import { Injectable } from "@angular/core";
import { Empleado } from "./empleado/empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService {

    constructor(private serviceEmpleadoService:ServicioEmpleadosService){}

    empleados: Empleado[] = [
        new Empleado("Nicolas", "Gonzalez", "Presidente", 7500),
        new Empleado("Maria", "Martín", "Vicepresidente", 6500),
        new Empleado("Ana", "Lopez", "Jefa de Area", 4500),
        new Empleado("Alfredo", "Gimenez", "Supervisor", 3500),
    ];


    agregarEmpleadoServicio(empleado: Empleado) {
        this.serviceEmpleadoService.muestraMensaje("Persona a agregar: " + empleado.nombre);
        this.empleados.push(empleado);
    }
}