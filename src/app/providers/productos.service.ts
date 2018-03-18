import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { MOCKS_PRODUCTOS } from './mocks.productos';

@Injectable()
export class ProductosService {

  // Array que contendrá los productos existenetes enel Mock
  productos: Producto[];

  constructor() {
    console.log('ProductosService constructor');
  }

  // Retorna todos los productos que tenemos en stock
  getAll(): Producto[] {
    console.log('ProductosService getAll');
    this.productos = [];
    let producto;

    const jsonData = JSON.parse(MOCKS_PRODUCTOS.stock);

    jsonData.forEach(element => {
      // console.log(element);
      producto = element;
     /*  producto = new Producto();
      producto.nombre = element.nombre,
      producto.precio = element.precio,
      producto.precioBruto = element.precioBruto,
      producto.porcentajeOferta = element.porcentajeOferta,
      producto.oferta = element.oferta,
      producto.foto = element.foto, */

      this.productos.push(producto);
    });

    // console.log(this.productos);
    return this.productos;
  }
}
