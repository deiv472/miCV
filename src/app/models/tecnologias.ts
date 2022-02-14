export class Tecnologias{
  
    id: number = 0;
    nombre: string = "";
    logo: string = "";
    nivel: number = 0;
  
    constructor(id:number, nombre: string, logo: string, nivel: number){
  
      this.id = id;
      this.nombre = nombre;
      this.logo = logo;
      this.nivel = nivel;
  
    }  
  }