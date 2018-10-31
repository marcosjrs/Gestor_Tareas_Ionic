import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.html'
})

export class PendientesPage{
    constructor(private tareasSvc:TareasService) { }
}