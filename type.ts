class Default{
  texto:string;
  numero: number;
  qualquer:any;
  boleano:boolean;
  array:Array<any>;
  outraFormaArray:any[];

  constructor(){
    this.metodo();
  }
  metodo(){
    return this.texto = 'Hello World com TypeScript';
  }
}
