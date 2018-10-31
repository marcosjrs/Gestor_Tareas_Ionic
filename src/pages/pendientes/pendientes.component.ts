import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesComponent{
    constructor(private tareasSvc:TareasService) { }
}