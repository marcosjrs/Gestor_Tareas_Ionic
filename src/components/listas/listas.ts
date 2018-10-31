import { Component, Input } from '@angular/core';
import { AgregarPage } from '../../pages/agregar/agregar';
import { Lista } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'listas-tareas',
  templateUrl: 'listas.html'
})
export class ListasComponent {
  @Input() soloCompletadas:Boolean;

  text: string;

  constructor(private navCtrl:NavController, private tareasSvc:TareasService, private alertCtrl:AlertController) {
  }

  abrirLista(lista) {
    this.navCtrl.push(AgregarPage, { titulo: lista.titulo, lista }); //Muestra popup con componente AgregarPage
  }

  eliminarLista(lista: Lista) {
    this.tareasSvc.removeLista(lista);
  }

  cambiarTituloLista(lista:Lista, titulo:string){
    lista.titulo = titulo;
    this.tareasSvc.updateLista(lista);
  }

  abrirPromptCambiarTitulo(lista:Lista, elementoDeslizante) {
      const prompt = this.alertCtrl.create({
        title: 'Cambiar nombre de la lista',
        message: "Introduce el nuevo nombre de la lista",
        inputs: [
          {
            name: 'nuevoTitulo',
            placeholder: lista.titulo
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              elementoDeslizante.close();
            }
          },
          {
            text: 'Save',
            handler: data => {
              if(data.nuevoTitulo.length>0){
                elementoDeslizante.close();
                this.cambiarTituloLista(lista, data.nuevoTitulo);
              }
            }
          }
        ]
      });
      prompt.present();
    }
}
