import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../models';

/**
 * Se le pasa un array de Lista y devuelve solo las que están completadas, o no, dependiendo del segundo parametro.
 */
@Pipe({
  name: 'completadas',
  pure: false
})
export class CompletadasPipe implements PipeTransform {

  transform(listas: Lista[], completada:boolean) {
    let ret = listas.filter( l => completada?(l.finalizacion || l.tareas.length==0):(!l.finalizacion && l.tareas.length>0));
    return ret;
  }
}
