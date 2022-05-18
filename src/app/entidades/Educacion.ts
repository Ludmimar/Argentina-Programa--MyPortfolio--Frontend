export class Educacion {
    id:number;
    school:string;
    title:string;
    img:string;
    start:number;
    end:number;
    career:string;
    idPersona:number;

    constructor(id:number,school:string, title:string, img:string, start:number, end:number, career:string, idPersona:number)
   {
       this.id=id;
       this.school=school;
       this.title=title;    
       this.img=img;
       this.start=start;
       this.end=end;
       this.career=career;
       this.idPersona=idPersona;
   }
public get _id() {
    return this.id
}

public get _school() {
    return this.school
}
   
public get _title() {
    return this.title
}

public get _img() {
    return this.img
}

public get _start() {
    return this.start
}

public get _end() {
    return this.end
}

public get _career() {
    return this.career
}

public setSchool(school: string) {
    this.school = school;
}
public setTitle(title: string) {
    this.title = title;
}
public setImg(img: string) {
    this.img = img;
}
public setStart(start: number) {
    this.start = start;
}

public setEndt(end: number) {
    this.end = end;
}
public setCareer(career: string) {
    this.career = career;
}
public setIdPersona(idPersona: number) {
    this.idPersona = idPersona;
}


}

