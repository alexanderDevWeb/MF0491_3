/* Clase para encapsular los atributos de una casa */
export class Servicios {
  // Atributos
  nombre: string;
  disponible: boolean;

  constructor() {

    console.log('Servicios Constructor');
    this.nombre = '';
    this.disponible = false;
  }
}
