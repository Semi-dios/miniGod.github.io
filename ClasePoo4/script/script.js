class Persona {

    constructor(name, age) {
        this.name = name;
        this.age = age;
       
    }
     retornarPersonas() {
      var cadena;
      cadena='<span>'+ this.name +'--'+ this.age + '</a>';
      console.log(cadena);
      return cadena;
     }

    
};


let person = new Array(4);
person[0] = new Persona("sergio","25");
person[1] = new Persona("andres","45");
person[2] = new Persona("yineth","29");
person[3] = new Persona("luciana","2");
let posmayor;
for(var f=0;f<person.length;f++)
  {
    if ( person[f].age > person[posmayor].age ) {
      posmayor = f;
    }
  } 

/* for (k = 1; k < person.length; k++) {
    for (i = 0; i < (person.length - k); i++) {
        if (person[i].age > person[i + 1].age) {
            aux = person[i];
            person[i] = person[i + 1];
            person[i + 1] = aux;
        }
    }
} */

document.write('Personas con mayor edad:<br> ');
for (let index = 0; index <person.length; index++) {
  if (person[index].age == person[posmayor].age) {
    person[index].retornarPersonas();
  }
  
}

      
    













