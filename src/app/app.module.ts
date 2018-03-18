import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { ProductosService } from './providers/productos.service';

// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { CarritoComponent } from './supermercado/carrito/carrito.component';
import { FilterProductosPipe } from './pipes/filterProductos.pipe';
import { FilterRoundPipe } from './pipes/round.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterProductosPipe,
    FilterRoundPipe,
    SupermercadoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
