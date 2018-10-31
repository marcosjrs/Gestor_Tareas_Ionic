import { Tarea } from "./tarea.model";

export class Lista{
    constructor(public tareas:Tarea[],  public titulo:string, 
                public creacion:Date = new Date(), public id:number = new Date().getTime(),
                public finalizacion?:Date){

    }
}