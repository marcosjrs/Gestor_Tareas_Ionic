import { Component, Input } from '@angular/core';
import { AgregarPage } from '../../pages/agregar/agregar';
import { Lista } from '../../models';
import { NavController } from 'ionic-angular';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'listas-tareas',
  templateUrl: 'listas.html'
})
export class ListasComponent {
  @Input() soloCompletadas:Boolean;

  text: string;

  constructor(private navCtrl:NavController, private tareasSvc:TareasService) {
  }

  abrirLista(lista) {
    this.navCtrl.push(AgregarPage, { titulo: lista.titulo, lista }); //Muestra popup con componente AgregarPage
  }

  eliminarLista(lista: Lista) {
    this.tareasSvc.removeLista(lista);
  }

}
