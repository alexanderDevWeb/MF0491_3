/* Clase para encapsular los atributos de un producto */
export class Producto {
  // Atributos
  nombre: string;
  precio: number;
  precioBruto: number;
  porcentajeOferta: number;
  oferta: boolean;
  foto: string;


  /* Constructor por defecto.
    nombre: string,
    precio: number,
    precioBruto: number,
    precioOferta: number,
    oferta: boolean,
    foto: string */
  constructor() {
    console.log('Producto Constructor');

    this.nombre = 'Producto Nuevo';
    this.precio = 9.99;
    this.precioBruto = 10.00;
    this.porcentajeOferta = 5;
    this.oferta = false;
    this.foto = '/assets/img/producto_default.jpg';
  }
}
