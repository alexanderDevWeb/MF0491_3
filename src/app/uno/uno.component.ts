import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  idTarea: string;
  respuesta: string;
  correcto = false;

  listado: string;

  constructor(private servicioService: ServicioService) {
    this.idTarea = '';
    this.listado = '';
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  cargarTarea(id) {
    console.log('Tarea: ' + id);

    if ((id === '')) {
      console.log('Id vacio');
      this.listarTareas();
    } else if ( isNaN(id) ) {
      this.respuesta = 'El Id debe ser un valor númerico';
      this.correcto = false;
    } else {
      this.servicioService.getTarea(id).subscribe(
        resultado => {
          // tslint:disable-next-line:no-console
          console.debug('peticion correcta %o', resultado);
          this.respuesta = resultado.title;
          this.correcto = true;
          this.listado = '';
          // this.mapeo(resultado);
        },
        error => {
          console.warn('peticion incorrecta %o', error );
          this.respuesta = 'El Id introducido no existe';

          // Al fallar devuelvo todos los ids posibles
          this.listarTareas();

          this.correcto = false;
        }
      );
    }
  }

  buscarTarea() {
    this.cargarTarea(this.idTarea);
  }

  listarTareas() {
    console.log('ListarTareas()');
    this.servicioService.getTarea('').subscribe(resultado => {
      console.log('Peticion LISTADO %o', resultado);
      // this.listado = JSON.stringify(resultado);
      resultado.forEach( el => {
        this.listado += el.id + ' ';
      });

      this.listado = 'Id´s disponibles: ' + this.listado;
    });
  }
}
