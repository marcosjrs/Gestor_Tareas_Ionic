import { Injectable } from '@angular/core';
import { Lista } from '../models';

@Injectable()
export class TareasService {
    listas:Lista[];

    constructor() {
        this.pruebas();
    }

    pruebas(){
        this.listas = [];
        this.listas.push(
            new Lista("Cursos pendientes por ver"),
            new Lista("Librerías a repasar")
        );
        console.log(this.listas)
    }

}