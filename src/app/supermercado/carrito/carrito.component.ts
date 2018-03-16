import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Linea } from '../../model/linea';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  // Parámetro de Entrada desde elComponente Padre al Hijo
  @Input('carrito') carrito: Linea[];

  // Recibo el total, que ya viene calculado
  @Input('total') total: number;

  // Los parámetros de salida se realizan a traves de Eventos
  // Debo indicar que el usuario ha querido vaciar la cesta
  @Output('vaciar') vaciar = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  vaciarCesta() {
    // Mando la señal al padre para que vacía el carrito
    this.vaciar.emit();

  }


}
