import { Injectable } from '@angular/core';
import { Auto } from '../app/autos/autos.component';
import { Persona } from '../app/autos/autos.component';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor() { }
  
  autos: Auto[] =  [
    {
      marca: "Ford", 
      modelo: "Fiesta", 
      precio: 150000, 
      km: 200, 
      color: "Azul", 
      cuotas: 12, 
      anio: 2019,
      patente: "APL123", 
      vendido: false
    },
    {
      marca: "Toyota", 
      modelo: "Corolla", 
      precio: 100000, 
      km: 0, 
      color: "Blanco", 
      cuotas: 14, 
      anio: 2019,
      patente: "JJK116", 
      vendido: false
    }
  ];

  personas: Persona[] = [
    {
      nombre: "Juan",
      capacidadDePagoEnCuotas: 20000,
      capacidadDePagoTotal: 100000
    }
  ];

  autosImportados() {
    return this.autos;
  }

  personaInteresada() {
    return this.personas;
  }

}
