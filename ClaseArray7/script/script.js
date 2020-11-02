
var vec = [];
var vec2 = [];


for (let index = 0; index < 10; index++) {
  vec[index] = Math.floor(Math.random()*1000)

}



for (let index = 0; index < vec.length; index++) {
  console.log('Valor '+vec[index]) ;

}
let min = 999;

for (let index in vec) {
  
  if(vec[index]< min){
    let pos = index;
    vec2 = vec.slice(pos, 10) ;
    min=vec[index];
  }

}

console.log(min);


console.log('Otro vector');
for (let index = 0; index < vec2.length; index++) {
  console.log('Valor '+vec2[index]) ;
}



var person = ['sergio','andres','penagos','posada', 'nacio','para','ser','una','leyenda','de','boxeo',',','empresario','un excelente tecnologico'];


var texto= person.join('<br>')

document.write('Ejercicio Join');
document.write(texto);
document.write('<br/>');

/* metodo String */

document.write('Ejercicio String');
var oracion = person.toString();

document.write('<br/>');
document.write(oracion);














