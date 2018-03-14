import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({
  name: 'filterCasa'
})
export class FilterCasaPipe implements PipeTransform {

  auxFilter: Casa[] = [];

  /**
   *Filtro para buscar en una colección de casas
   *no es case sensitive
   * @param casas : Casa[]
   * @param searchText : string con la casa o direccion
   */
  transform(
    casas: Casa[],
    searchText: string,
    alq: boolean = false,
    vent: boolean = false,
    minPrec: number = 0,
    maxPrec: number = 0
  ): Casa[] {

    // Si no hay casas devuelvo array vacío
    if (!casas) {
      return [];
    }

    // Si no hay criterio devuelve el array tal cual
    if (!searchText) {
      console.log('Filtrando: input vacío');

      // Paso al auxiliar todas las casas
      this.auxFilter = casas;
    }

    // Controlo el texto introducido
    if (searchText) {
      // Paso a lowercase para hacer la comparación
      searchText = searchText.toLowerCase();

      this.auxFilter = casas.filter(it => {
        const crit = it.nombre + it.direccion;
        return crit.toLowerCase().includes(searchText);
      });
    }

    // Controlo los checkboxes de alquiler y venta
    if (alq) {
      this.auxFilter = this.auxFilter.filter(it => {
        return it.alquiler === true;
      });
    }

    if (vent) {
      this.auxFilter = this.auxFilter.filter(it => {
        return it.alquiler === false;
      });
    }

    // Controlo los precios mínimo máximo
    // Si hay alguno de ellos, lo filtro
    if (minPrec || maxPrec) {
      if (minPrec && !maxPrec) {
        this.auxFilter = this.auxFilter.filter(it => {
          return it.precio >= minPrec;
        });
      } else if (!minPrec && maxPrec) {
        this.auxFilter = this.auxFilter.filter(it => {
          return it.precio <= maxPrec;
        });
      } else { // Hay maximo y mínimo
        this.auxFilter = this.auxFilter.filter(it => {
          return (it.precio >= minPrec && it.precio <= maxPrec);
        });
      }
    }


    // Devuelvo el array con el filtro completo
    return this.auxFilter;
  }
}
