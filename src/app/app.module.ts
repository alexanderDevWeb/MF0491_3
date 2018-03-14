import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';

import { ServicioService } from './providers/servicio.service';

// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { FormBasicoComponent } from './form-basico/form-basico.component';
import { CasasComponent } from './casas/casas.component';
import { CasasService } from './providers/casas.service';
import { FilterCasaPipe } from './pipes/filterCasa.pipe';
import { DetalleComponent } from './casas/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    FormBasicoComponent,
    CasasComponent,
    FilterCasaPipe,
    DetalleComponent
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
    CasasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
