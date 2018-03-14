import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT = 'http://192.168.0.42:3000';

@Injectable()
export class ServicioService {
  constructor(public http: HttpClient) {
    console.log('ServicioService constructor');
  }

  getTarea( id ): Observable<any> {
    console.log('ID: ' + id);

    // Hay que tener en cuenta que si el id es '', devuelve todas las tareas
    const url = END_POINT + '/todos/' + id;
    // return this.http.get(this.url+'productos');
    console.log(`ServicioService getTarea ${url}`);
    return this.http.get(url);
  }
}
