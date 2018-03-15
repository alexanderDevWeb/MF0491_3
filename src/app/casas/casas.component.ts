import { Component, OnInit } from '@angular/core';
import { CasasService } from '../providers/casas.service';
import { Casa } from '../model/casa';
import * as $ from 'jquery';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.scss']
})
export class CasasComponent implements OnInit {
  aCasas: Casa[];
  seleccion: Casa;

  // Filtros
  searchText: string;
  alq: boolean;
  vent: boolean;
  minPrec: number;
  maxPrec: number;

  constructor(private casasService: CasasService) {

    this.aCasas = [];
    this.seleccion = new Casa();
  }

  ngOnInit() {
    this.cargarCasas();
  }

  cargarCasas() {
    console.log('CasasComponent cargarCasas');
    this.aCasas = [];
    this.casasService.getCasas().subscribe(
      resultado => {
        // tslint:disable-next-line:no-console
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
        // Dejo seleccionada la primera casa
        this.seleccion = this.aCasas[0];
        console.log('Primera Casa: ' + this.aCasas[0]);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );
  }

  /**
   * mapea los resultados de formato json a objetos Casa
   * @param resultado
   */
  mapeo(resultado: any) {
    let casa: Casa;
    resultado.forEach(el => {
      casa = new Casa();
      casa.nombre = el.nombre;
      casa.precio = el.precio;
      casa.alquiler = el.alquiler;
      casa.habitaciones = el.habitaciones;
      casa.foto = el.foto;
      casa.direccion = el.direccion;
      casa.servicios = el.servicios;

      this.aCasas.push(casa);
    });
  }

  seleccionarCasa(casa) {
    console.log('Casa seleccionada');

    this.seleccion = casa;
  }

  // Un poco extraño porque no tiene lógica que los dos checkboxes
  // estñen pulsados
  checkeo( tipo ) {
    if (tipo === 'alq') {
      console.log('Click en alquilar');

      this.alq = !this.alq;
      // Modifico el otro checkbox y su valor
      $('#iAlqVen span:last-child input').prop('checked', false);
      this.vent = false;
    } else {
      this.vent = !this.vent;
      $('#iAlqVen span:first-child input').prop('checked', false);
      this.alq = false;
    }
  }

  recargar(e) {
    this.aCasas.unshift(e.casaAnadida);
  }
}
