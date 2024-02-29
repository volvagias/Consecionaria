import { Component } from '@angular/core';
import { AutosService } from '../autos.service'

export interface Auto {
  marca: String, 
  modelo: String, 
  precio: number, 
  km: Number, 
  color: String, 
  cuotas: Number, 
  anio: Number,
  patente: String, 
  vendido: Boolean
}

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {    

  autos: Auto[] = [];

  autosParaVenta: Auto[] = [];

  autosSinUso: Auto[] = [];

  autosVendidos: Auto[] = [];

  totalDeVentas: number = 0;




  patente: String = '';

  autoDisponible: boolean = false;

  autoNuevo: Number = 100;


  ngOnInit() {

  }

  constructor (
    private autosService: AutosService ) {}
  
  buscarAuto() {
    this.autos = this.autosService.autosImportados().filter((auto) => auto.patente === this.patente);
  }

  venderAuto () {
    switch (this.autos[0].vendido) {
      case false:
          this.autos[0].vendido = true;
          prompt("Auto vendido");
          break;
      
      case true:
          prompt("El auto ya fue vendido y no está disponible");
          break;
    }

    // console.log(this.buscarAuto());
  }

  buscarAutosDisponible() {
    this.autosParaVenta = this.autosService.autosImportados().filter((auto) => auto.vendido === this.autoDisponible);
  }


  autosNuevos() {
    this.autosSinUso = this.autosService.autosImportados().filter((auto) => auto.km < this.autoNuevo);
  }

  listaDeVentas() {
    this.autosVendidos = this.autosService.autosImportados().filter((auto) => auto.vendido === !this.autoDisponible);
  }

  ventasTotales() {
    const listaDeVentas = this.autosService.autosImportados().filter((auto) => auto.vendido === !this.autoDisponible);

    this.totalDeVentas = listaDeVentas.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  }
}
