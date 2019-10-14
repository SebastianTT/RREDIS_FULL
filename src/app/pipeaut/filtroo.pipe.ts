import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltrooPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
  	console.log(arreglo);
  	if(texto === ''){
  		return arreglo;
  	}
  return	arreglo.filter(item =>{ return item.trabajo.semillero.nombre_semillero.toLowerCase().includes( texto.toLowerCase());});
   
  }

}
