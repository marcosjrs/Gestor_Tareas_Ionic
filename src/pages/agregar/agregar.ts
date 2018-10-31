import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { NavParams } from 'ionic-angular';
import { Lista } from '../../models';


@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  lista:Lista;

  constructor(private tareasSvc: TareasService, private navParams: NavParams) {   
    this.lista = new Lista( this.navParams.get('titulo') );
    console.log( this.navParams.get('titulo'));
  }

}
