import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosComponent{
    constructor(private tareasSvc:TareasService) { }
}