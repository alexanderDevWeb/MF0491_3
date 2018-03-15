import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Casa } from '../model/casa';

// const END_POINT = 'http://192.168.0.42:3000';
const END_POINT = 'http://localhost:3000';

@Injectable()
export class CasasService {
  constructor(public http: HttpClient) {
    console.log('CasasService constructor');
  }

  getCasas(): Observable<any> {
    const url = END_POINT + '/casas';
    console.log(`CasasService getCasas() ${url}`);
    return this.http.get(url);
  }

  crear(casa: Casa): Observable<any> {
    console.log(casa);
    const url = END_POINT + '/casas';
    console.log(`CasasService crear ${url}`);

    const body = casa;
    /*{
      nombre: casa.nombre,
      precio: casa.precio,
      alquiler: casa.alquiler,
      habitaciones: casa.habitaciones,
      foto: casa.foto,
      direccion: casa.direccion,
      servicios: casa.servicios
       [
        {
          nombre: 'tv',
          disponible: false
        },
        {
          nombre: 'wc',
          disponible: false
        },
        {
          nombre: 'jardin',
          disponible: false
        },
        {
          nombre: 'cocina',
          disponible: false
        }
      ] 
    };*/

    console.log('Body: %o', body);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(url, body, httpOptions);
  }

  delete(nombre: string) {
    const url = END_POINT + '/casas/' + nombre;
    console.log(`CasasService delete ${url}`);
    return this.http.delete(url);
  }

  /**
   * Modificamos el estado "completed" de una Tarea por su id
   * @param todo : Todo
   */

/*   patch(todo: Todo): Observable<any> {
    let url = GLOBAL.endpoint + `/todos/${todo.id}`;
    console.log(`TodosService patch ${url}`);

    let body = {
      completed: !todo.completed
    };

    return this.http.patch(url, body);
  } */
}
