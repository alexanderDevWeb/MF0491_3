import { Servicios } from './servicios';

/* Clase para encapsular los atributos de una casa */
export class Casa {
  // Atributos
  nombre: string;
  precio: number;
  alquiler: boolean;
  habitaciones: number;
  foto: string;
  direccion: string;
  servicios: Servicios[];

  constructor() {

    console.log('Casa Constructor');

    this.nombre = 'Casa Nueva';
    this.precio = 0;
    this.alquiler = false;
    this.habitaciones = 0;
    this.foto = '/assets/img/casa_default.jpg';
    this.direccion = '';
    this.servicios = [
      {
        'nombre': 'tv',
        'disponible': false
      },
      {
        'nombre': 'wc',
        'disponible': false
      },
      {
        'nombre': 'jardin',
        'disponible': false
      },
      {
        'nombre': 'cocina',
        'disponible': false
      }
    ];
  }
}
