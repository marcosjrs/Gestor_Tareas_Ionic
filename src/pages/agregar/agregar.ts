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
    this.lista = new Lista( this.navParams.get('titulo') );
    this.tareasSvc.addLista(this.lista);
  }

  guardarNuevaTarea(){
    this.lista.tareas.push( new Tarea(this.descripcionNuevaTarea, false) );
    this.updateListaEnServicio();
    this.descripcionNuevaTarea = "";
  }

  modificarCompletadoTarea(tarea:Tarea){
    tarea.completado = !tarea.completado;
    this.updateListaEnServicio();
  }

  borrarTarea(indexTarea:number){
    this.lista.tareas.splice(indexTarea,1);
    this.updateListaEnServicio();
  }

  updateListaEnServicio(){
    this.tareasSvc.updateLista(this.lista);
  }

}
