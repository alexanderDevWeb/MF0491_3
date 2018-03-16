import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../providers/productos.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {

  stock: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    console.log('SupermercadoComponent ngOnInit');
    this.stock = this.productosService.getAll();
  }

}
