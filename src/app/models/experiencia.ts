export class Experiencia{
  
    id: number = 0;
    empresa: string = "";
    puesto: string = "";
    definicion: string = "";
    duracion: string = "";
  
    constructor(id:number, empresa: string, puesto: string, definicion: string, duracion: string){
  
      this.id = id;
      this.empresa = empresa;
      this.puesto = puesto;
      this.definicion = definicion;
      this.duracion = duracion;
  
    }  
  }