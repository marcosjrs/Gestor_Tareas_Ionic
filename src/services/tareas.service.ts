import { Injectable } from '@angular/core';
import { Lista } from '../models';

@Injectable()
export class TareasService {
    listas:Lista[];

    constructor() {
        this.recuperarListas();
    }

    addLista(lista:Lista){
        if(!this.listas) this.listas = [];
        this.listas.push(lista);
        this.persistirListas();
    }

    updateLista(lista:Lista){
        this.listas = this.listas.map( l => {
            if(lista.id == l.id ){ l = lista; }
            return l;
        });
        this.persistirListas();
    }

    removeLista(lista:Lista){
        this.listas = this.listas.filter( l => lista.id != l.id );
        this.persistirListas();
    }

    persistirListas(){
        //Profesionalmente se deberían utilizarse https://ionicframework.com/docs/storage/
        localStorage.setItem("listas",JSON.stringify(this.listas));
    }

    recuperarListas(){
        const sListas = localStorage.getItem("listas");
        if(sListas) this.listas = JSON.parse( sListas );
    }

}