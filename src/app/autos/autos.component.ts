import { Component } from '@angular/core';
import { AutosService } from '../autos.service'

export interface Auto {
  marca: String, 
  modelo: String, 
  precio: Number, 
  km: Number, 
  color: String, 
  cuotas: Number, 
  anio: Number,
  patente: String, 
  vendido: boolean
}

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {    

  autos: Auto[] = [];

  autosParaVenta: Auto[] = [];

  patente: string = '';

  autoDisponible: boolean = false;

  ngOnInit() {

  }

  constructor (
    private autosService: AutosService ) {}
  
  buscarAuto() {
    console.log("buscar", this.autos = this.autosService.autosImportados().filter((auto) => auto.patente === this.patente));
  }

  venderAuto () {
    switch (this.autos[0].vendido) {
      case false:
          console.log('Vendido:', this.autos[0].vendido = true);
          break;
      
      case true:
          prompt("El auto ya fue vendido y no está disponible");
          break;
    }

    // console.log(this.buscarAuto());
  }

  buscarAutosDisponible() {
    console.log("buscar", this.autosParaVenta = this.autosService.autosImportados().filter((auto) => auto.vendido === this.autoDisponible));
  }

}
