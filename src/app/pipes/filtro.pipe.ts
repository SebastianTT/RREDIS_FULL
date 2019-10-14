import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
  	console.log(arreglo);
  	if(texto === ''){
  		return arreglo;
  	}
  return	arreglo.filter(item =>{ return item.espacio.campus.nombre_campus.toLowerCase().includes( texto.toLowerCase());});
   
  }

}
