import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../model/producto';

@Pipe({
  name: 'filterProductos'
})
export class FilterProductosPipe implements PipeTransform {

  auxFilter: Producto[] = [];

  transform(
    stock: Producto[],
    searchText: string,
  ): Producto[] {

    // Si no hay casas devuelvo array vacío
    if (!stock) {
      return [];
    }

    // Si no hay criterio devuelve el array tal cual
    if (!searchText) {
      console.log('Filtrando: input vacío');

      // Paso al auxiliar todas las casas
      this.auxFilter = stock;
    }

    // Controlo el texto introducido
    if (searchText) {
      // Paso a lowercase para hacer la comparación
      searchText = searchText.toLowerCase();

      this.auxFilter = stock.filter(it => {
        return it.nombre.toLowerCase().includes(searchText);
      });
    }

    // Devuelvo el array con el filtro completo
    return this.auxFilter;
  }
}
