import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../providers/productos.service';
import { Producto } from '../model/producto';

// Jquery para la suma de cantidad
import * as $ from 'jquery';
import { Linea } from '../model/linea';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  stock: Producto[];

  // Criterio del buscador
  searchText: string;

  // Array de líneas de pedido
  // Cada línea tiene un proucto y una cantidad
  carrito: Linea[];

  // El total de la compra
  total: number;

  mostrar: boolean;

  constructor(private productosService: ProductosService) {
    this.carrito = [];
    this.total = 0;
    this.mostrar = false;
  }

  ngOnInit() {
    console.log('SupermercadoComponent ngOnInit');
    this.stock = this.productosService.getAll();
  }

  sumarCantidad(e) {
    console.log(e.target.parentNode.childNodes[3].textContent);
    const cant = e.target.parentNode.childNodes[3].textContent;
    e.target.parentNode.childNodes[3].textContent = +cant + 1;
  }

  restarCantidad(e) {
    console.log(e.target.parentNode.childNodes[3].textContent);
    const cant = e.target.parentNode.childNodes[3].textContent;
    if (cant > 1) {
      e.target.parentNode.childNodes[3].textContent = +cant - 1;
    }
  }

  anadirProducto(e, producto) {
      console.log(e);
      console.log(e.target.parentNode.getElementsByClassName('botCant')[0].textContent );
      console.log(producto);
      const cant = e.target.parentNode.getElementsByClassName('botCant')[0].textContent;

      const linea = new Linea();
      linea.producto = producto;
      linea.cantidad = cant;

      this.carrito.unshift(linea);

      let tot = 0;
      this.carrito.forEach( el => {
        if ( !el.producto.oferta ) {
          tot += el.producto.precio * el.cantidad;
        } else {
          // tot += el.producto.precio * el.cantidad;
          tot += (producto.precio - ((producto.precio * producto.porcentajeOferta) / 100)) * el.cantidad;
        }

      })

      this.total = Math.floor(tot * 100) / 100;
  }

  // Muestra u oculta el carrito
  toggleCarrito() {
    console.log('ToggleCarrito()');
    
    this.mostrar = !this.mostrar;
  }

  // Vacío el carrito a través del evento output del hijo
  vaciarCarrito() {
    // Vacío el Carrito y fuerzo el toggle
    this.carrito = [];
    this.total = 0;
    this.toggleCarrito()
  }
}
