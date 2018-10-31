import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  constructor(private tareasSvc: TareasService, private navParams: NavParams) {    
    console.log( this.navParams.get('titulo'));
  }

}
