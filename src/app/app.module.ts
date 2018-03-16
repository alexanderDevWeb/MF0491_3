import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';

import { ServicioService } from './providers/servicio.service';
import { CasasService } from './providers/casas.service';
import { ProductosService } from './providers/productos.service';

// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { FormBasicoComponent } from './form-basico/form-basico.component';
import { CasasComponent } from './casas/casas.component';
import { FilterCasaPipe } from './pipes/filterCasa.pipe';
import { DetalleComponent } from './casas/detalle/detalle.component';
import { FormularioComponent } from './casas/formulario/formulario.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { CarritoComponent } from './supermercado/carrito/carrito.component';
import { FilterProductosPipe } from './pipes/filterProductos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    FormBasicoComponent,
    CasasComponent,
    FilterCasaPipe,
    FilterProductosPipe,
    DetalleComponent,
    FormularioComponent,
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
    ServicioService,
    CasasService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
