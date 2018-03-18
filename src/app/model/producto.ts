/* Clase para encapsular los atributos de un producto */
export class Producto {
  // Atributos
  id: number;
  nombre: string;
  precio: number;
  precioBruto: string;
  porcentajeOferta: number;
  oferta: boolean;
  foto: string;

  constructor() {
    console.log('Producto Constructor');
    this.id = -1;
    this.nombre = 'Producto Nuevo';
    this.precio = 9.99;
    this.precioBruto = '10.00€ /Litro';
    this.porcentajeOferta = 5;
    this.oferta = false;
    this.foto = '/assets/img/producto_default.jpg';
  }
}
