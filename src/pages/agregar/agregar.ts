import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { NavParams } from 'ionic-angular';
import { Lista, Tarea } from '../../models';


@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  lista:Lista;
  descripcionNuevaTarea:string;

  constructor(private tareasSvc: TareasService, private navParams: NavParams) {   
    let lista = this.navParams.get("lista");
    console.log(lista);
    if(lista){
      this.lista = this.navParams.get("lista")
    }else{
      this.lista =new Lista( this.navParams.get('titulo') );
      this.tareasSvc.addLista(this.lista);
    }
  }

  guardarNuevaTarea(){
    this.lista.tareas.push( new Tarea(this.descripcionNuevaTarea, false) );
    this.updateListaEnServicio();
    this.descripcionNuevaTarea = "";
  }

  modificarCompletadoTarea(tarea:Tarea){
    tarea.completado = !tarea.completado;
    let tareasNoCompletadas = this.lista.tareas.filter( l => !l.completado).length;
    this.lista.finalizacion = (tareasNoCompletadas == 0) ? new Date() : undefined;
    this.updateListaEnServicio();
  }

  borrarTarea(indexTarea:number){
    this.lista.tareas.splice(indexTarea,1);
    this.updateListaEnServicio();
  }

  updateListaEnServicio(){
    this.tareasSvc.persistirListas(); //la lista de esta clase es una referencia a la contenida en el servicio, por eso funciona.
  }

}
