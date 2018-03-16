import { Producto } from './producto';

/* Clase para encapsular los atributos de un producto */
export class Linea {
  // Atributos
  producto: Producto;
  cantidad: number;

  constructor() {
    console.log('Linea Constructor');

    this.producto = new Producto();
    this.cantidad = 0;
  }
}
