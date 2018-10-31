import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.html'
})

export class PendientesPage{
    constructor(private tareasSvc:TareasService,
                private navCtrl:NavController) { }

    irAgregarLista(){
        this.navCtrl.push( AgregarPage ); //Muestra popup con componente AgregarPage
    }
}