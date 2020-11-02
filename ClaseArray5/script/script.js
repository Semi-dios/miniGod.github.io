
var salaries = [];


for (let index = 0; index < 3; index++) {
  salaries[index] =  prompt('Ingrese el sueldo');
  if (salaries[index]  == 0) {
    break;
  }
 
}



for (let index = 0; index < 3; index++) {
  document.write('Salario : ' +salaries[index]);
  document.write('<br> : ' );

 
}
document.write('<br> : ' );
document.write('Sort  '+salaries.sort(function comparar(a, b) {
  return a - b;
}));









