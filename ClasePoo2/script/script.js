class person {

    constructor(name, age) {
        this.name =name;
        this.age = age;
    }
    get return() {
        console.log(''+name+'\n edad'+age)
    }

};

class enterprise {
  constructor(top) {
    this.top =top;
    
    }
}

let persona = new person ;
const enterprisa = new enterprise;

const user = prompt('Ingrese su nombre');
const edad = prompt('Ingrese su edad');

persona.name = user;
persona.age =  edad;
enterprisa.top = 60;

if ( enterprisa.top > persona.age) {
  console.log('No aceptado en la empresa');
}










