export class Persona{ //propiedades de la
    id:number;
    name:string;
    lastname:string;
    position:string;
    ubication:string;
    image:string;
    dateOfBirth:string;
    mail:string;
    aboutMe:string;
    aboutMeImg:string;
    backImage:string;
    logoArgProg:string;
    password:string;

   constructor(id:number, name:string, lastname:string, position:string, ubication:string, image:string, dateOfBirth:string,  mail:string, aboutMe:string, aboutMeImg:string, backImage:string, password:string, logoArgProg:string)
   {
       this.id=id;
       this.name=name;
       this.lastname=lastname;    
       this.position=position;
       this.ubication=ubication;
       this.image=image;
       this.dateOfBirth=dateOfBirth;
       this.mail=mail;
       this.aboutMe=aboutMe;
       this.aboutMeImg=aboutMeImg;
       this.backImage=backImage;
       this.password= password;
       this.logoArgProg = logoArgProg
   }
public get _id() {
    return this.id
}

public get _name() {
    return this.name
}
   
public get _lastname() {
    return this.lastname
}

public get _position() {
    return this.position
}

public get _ubication() {
    return this.ubication
}

public get _image() {
    return this.image
}

public get _dateOfBirth() {
    return this.dateOfBirth
}

public get _mail() {
    return this.mail
}

public get _aboutMe() {
    return this.aboutMe
}

public get _aboutMeImg() {
    return this.aboutMeImg
}

public get _backImage() {
    return this.backImage
}

public get _password() {
    return this.password
}

public get _logoArgProg() {
    return this.logoArgProg
}



    //crear getter y setter
}