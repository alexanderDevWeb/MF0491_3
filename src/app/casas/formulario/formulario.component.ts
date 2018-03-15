import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CasasService } from '../../providers/casas.service';
import { Casa } from '../../model/casa';

// npm install --save-dev jquery
import * as $ from 'jquery';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  ingredientes: FormArray;

  @Output('casaAnadida') casaAnadida = new EventEmitter();

  constructor(private casasService: CasasService, private fb: FormBuilder) {
    console.log('FormularioComponent constructor');
    // Crea un objeto con todos los controles del formulario (Formulario en sí)
    // Es un grupo
    this.crearFormulario();

    // Es un array de objetos, que a su vez son grupos de controles
    // Es un selector ???
    // this.ingredientes = this.formulario.get('ingredientes') as FormArray;
  }

  ngOnInit() {
    console.log('FormularioComponent NgOnInit');
  }

  crearFormulario(): void {
    console.log('FormularioComponent crearFormulario');
    this.formulario = this.fb.group({
      // FormControl (input) => ['value', [Validaciones]]
      nombre: ['algo', Validators.required],
      precio: ['', Validators.required],
      alquiler: ['', Validators.required],
      habitaciones: ['', Validators.required],
      foto: [''], // Valor por defecto
      direccion: ['', Validators.required]
      // servicios[]


      // Para el array de ingredientes hay que crear un formaArray
      // ingredientes: this.fb.array([this.createIngredienteFormGroup()])
    });
  }

  /**
   * Creamos un FormGroup para los Ingredientes
   * */
  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }

  /**
   * Evento para crear un nuevo Ingrediente
   */
  clickOtroIngrediente() {
    console.log('FormularioComponent clickOtroIngrediente');
    this.ingredientes.push(this.createIngredienteFormGroup());
  }

  /**
   * Elimina el objeto del arrayForm del control Ingrediente
   * @param index
   */
  clickEliminarIngrediente( index ) {
    console.log('FormularioComponent clickEliminarIngrediente');
    this.ingredientes.removeAt(index);
  }


  submitar(e): void {
    console.log('FormularioComponent onSubmit()');

    const casa = this.mapearFormularioReceta();

    // Añado la receta mediante el servicio
    // console.log(this.casasService.crear(casa).subscribe());
    this.casasService.crear(casa).subscribe();

    // Paso la casa al padre para añadirla al array
    this.casaAnadida.emit({'casaAnadida': casa});



    /*
    Aquí deberíamos hacer un reset introduciendo los valores en un objeto literal como
    como parámetro. Además se deja el array a1 elemento con splice();
    Está en el ñultimo commit de Ander del 8/3
    */

    // Creo un formulario para resetearlo
    this.crearFormulario();

    $('#aspa').click();
  }

  /**
   * Nos retorna las clases para darle estilos al div que contiene el input
   * @param control : FormControl
   */
  estilosInput(control: FormControl): string {
    const CLASS_ERROR = 'has-error';
    const CLASS_SUCCESS = 'has-success';

    if (control.dirty) {
      return control.valid ? CLASS_SUCCESS : CLASS_ERROR;
    } else {
      return 'form-group';
    }
  }

  mapearFormularioReceta(): Casa {
    // Recojo los valores mostrados en el formulario
    const nombre = this.formulario.value.nombre;
    const precio = this.formulario.value.precio;
    const alquiler = this.formulario.value.precio;
    const habitaciones = this.formulario.value.precio;
    const foto = this.formulario.value.foto
      ? this.formulario.value.foto
      : '/assets/img/casa_default.jpg';
    const direccion = this.formulario.value.direccion;

    // const ingredientes: string[] = [];


    // Recuperar los ingredientes
    /* this.formulario.value.ingredientes.map(element => {
      ingredientes.push(element.nombre);
    }); */

    // Creo un objeto Receta con los valores del formulario
    const casa = new Casa();
    casa.nombre = nombre;
    casa.precio = precio;
    casa.alquiler = alquiler;
    casa.habitaciones = habitaciones;
    casa.foto = foto;
    casa.direccion = direccion;

    return casa;
  }
}
