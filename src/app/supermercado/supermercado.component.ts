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

  // El total de la compra con descuentos
  totalDesc: number;

  // Cantidad Total de productos en el carrito
  cantCarrito: number;

  // Controla que se muestre el carrito o no
  mostrar: boolean;

  constructor(private productosService: ProductosService) {
    this.carrito = [];
    this.total = 0;
    this.mostrar = false;
    this.cantCarrito = 0;
    this.totalDesc = 0;
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
      console.log('Producto añadido');

      // console.log(this.carrito);


      let tot = 0;
      let cantCarr = 0;
      let totDesc = 0;
      let elPrec;
      let elPorc;
      this.carrito.forEach( el => {
        if (el) {
          elPrec = el.producto.precio;
          elPorc = el.producto.porcentajeOferta;
          if ( !el.producto.oferta ) {
            tot += elPrec * el.cantidad;
          } else {
            tot += (elPrec - (elPrec * elPorc) / 100) * el.cantidad;
            // floorconsole.log(`${elPrec} - Math.round(${elPrec} * ${elPorc} / 100) * ${el.cantidad}`);
            totDesc += (elPrec - (elPrec * elPorc) / 100) * el.cantidad;
          }
          cantCarr += +el.cantidad;
        }
      });
      console.log(this.carrito);

      this.total = +tot.toFixed(2);
      this.cantCarrito = cantCarr;
      this.totalDesc =  +totDesc.toFixed(2);
      console.log(this.totalDesc);
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
    this.cantCarrito = 0;
    this.totalDesc = 0;
    this.toggleCarrito();
  }

  eliminarProducto(e) {
    // console.log('Eliminar posicion: ' + e.posicion);
    console.log(this.carrito);

    let valLinea;
    let cantLinea;
    cantLinea = this.carrito[e.posicion].cantidad;
    valLinea = !this.carrito[e.posicion].producto.oferta ?
    this.carrito[e.posicion].producto.precio :
    (this.carrito[e.posicion].producto.precio -
      (Math.round(this.carrito[e.posicion].producto.precio * this.carrito[e.posicion].producto.porcentajeOferta)) / 100);

    // Resto al total el valor de la línea por la cantidad
    // console.log('Cantidad a REstar: ' + (Math.round(cantLinea * valLinea * 100) / 100));

    this.total -= +(cantLinea * valLinea).toFixed(2);
    this.total = +(this.total).toFixed(2);
    // this.total = Math.round(this.total * 100) / 100;
    // console.log('. Total: ' + this.total);

    // Resto a la cantidad de en la linea al total de productos
    this.cantCarrito -= this.carrito[e.posicion].cantidad;

    // Si está en oferta resto la cantidad al totalDescuento
    if ( this.carrito[e.posicion].producto.oferta) {
      // console.log('TotalDesc: ' + this.totalDesc);

      console.log(this.carrito[e.posicion].producto.precio);
      console.log(' - ');
      console.log(Math.round(this.carrito[e.posicion].producto.precio * this.carrito[e.posicion].producto.porcentajeOferta) / 100));
      this.totalDesc -=  (this.carrito[e.posicion].producto.precio -
        (Math.round(this.carrito[e.posicion].producto.precio * this.carrito[e.posicion].producto.porcentajeOferta) / 100)) * cantLinea;
        // this.totalDesc = Math.round(this.totalDesc * 100) / 100;
        this.totalDesc = +(this.totalDesc).toFixed(2);
      }

    // console.log('Restando. TotalDesc: ' + this.totalDesc);

     // Redondeo
     if (this.total < 0.1  ) { this.total = 0; }
     if (this.totalDesc < 0.1  ) { this.totalDesc = 0; }


    // Elimino el contenido en la posición
    this.carrito[e.posicion]  = null;
  }

}
