export class Experiencia {
    id:number;
    title:string;
    details:string;
    img:string;
    lenguage:number;
    url:number; 
    idPersona:number;

    constructor(id:number,title:string,details:string, img:string, lenguage:number, url:number, idPersona:number)
   {
       this.id=id;
       this.title=title;
       this.details=details;
       this.img=img;
       this.lenguage=lenguage;
       this.url=url;   
       this.idPersona=idPersona;  
   }

   public get _id() {
    return this.id
}

public get _title() {
    return this.title
}
   
public get _details() {
    return this.details
}

public get _img() {
    return this.img
}

public get _lenguage() {
    return this.lenguage
}

public get _url() {
    return this.url
}



}