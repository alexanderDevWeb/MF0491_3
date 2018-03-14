import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../model/casa';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  // Receta recibida desde el componente padre
  @Input('casaSel') casaSel: Casa;

  constructor() {
    console.log('DetalleComponent constructor');
  }

  ngOnInit() {}
}
