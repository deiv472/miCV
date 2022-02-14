export class Formacion{
  
    id: number = 0;
    titulo: string = "";
    centro: string = "";
    anyoFin: number = 0;
  
    constructor(id:number, titulo: string, centro: string, anyoFin: number){
  
      this.id = id;
      this.titulo = titulo;
      this.centro = centro;
      this.anyoFin = anyoFin;
  
    }  
  }