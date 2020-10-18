import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

//Pure determina que esye pipe es puro y no importa donde se realice alguna accion lo va a detectar igual
@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {
    
    return listas.filter(lista => lista.terminada === completada);
  }

}
