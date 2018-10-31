import { Tarea } from "./tarea.model";

export class Lista{
    constructor(  public titulo:string, 
                public creacion:Date = new Date(), public id:number = new Date().getTime(),
                public tareas?:Tarea[],
                public finalizacion?:Date){

    }
}