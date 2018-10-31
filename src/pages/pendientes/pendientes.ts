import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';
import { Lista } from '../../models';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.html'
})

export class PendientesPage {
    constructor(private tareasSvc: TareasService,
        private navCtrl: NavController,
        private alertCtrl: AlertController) { }

    irAgregarLista() {
        this.mostrarPromptNombreNuevaLista();
    }


    mostrarPromptNombreNuevaLista() {
        const prompt = this.alertCtrl.create({
            title: 'Creando una lista',
            message: "Escribe el nombre de la lista",
            inputs: [
                {
                    name: 'nombreNuevaLista',
                    placeholder: 'Nombre de la lista'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: data => { }
                },
                {
                    text: 'Guardar',
                    handler: data => {
                        if (data.nombreNuevaLista.length > 0) {
                            this.mostrarPaginaAgregarTareasALista(data.nombreNuevaLista);
                        }
                    }
                }
            ]
        });
        prompt.present();
    }

    mostrarPaginaAgregarTareasALista(nombreNuevaLista){
        this.navCtrl.push( AgregarPage, {titulo:nombreNuevaLista} ); //Muestra popup con componente AgregarPage
    }

    abrirLista(lista){
        this.navCtrl.push( AgregarPage, {titulo:lista.titulo, lista} ); //Muestra popup con componente AgregarPage
    }

    eliminarLista(lista:Lista){
        this.tareasSvc.removeLista(lista);
    }
}