import { Injectable } from '@angular/core';
import { Lista } from '../models';

@Injectable()
export class TareasService {
    listas:Lista[];

    constructor() {
    }

    addLista(lista:Lista){
        if(!this.listas) this.listas = [];
        this.listas.push(lista);
    }

    removeLista(lista:Lista){
        this.listas = this.listas.filter( l => lista.id != l.id );
    }

}