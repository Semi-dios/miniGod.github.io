
let num = parseFloat(prompt("Ingrese un primero numero"));
let num1 = parseFloat(prompt("Ingrese un  segundo numero "));


if (isNaN(num) || isNaN(num1)){
  document.write('El caracter ingresado no es un numero');
}else  {
  document.write('El caracter ingresado es un numero');
}


let product = num * num1;
document.write('<br/>');

if(isFinite(product)) {
  document.write('El resultado es finito');
}



