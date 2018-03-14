import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
}
