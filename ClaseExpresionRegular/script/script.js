
/* let number = prompt('Ingrese un valor ');

   let patron = /^[0-9]{3}\.[0-9]{2}$/;



if (patron.test(number)){
  document.write('Bien');
}else {
  document.write('Mal');
} */

let patente = prompt('Ingrese una patente');

let patron = /[a-z]{2}[0-9]{3}[a-z]{2}/;

if (patron.test(patente)){
  alert('La patente es correcta');
}else {
  alert('La patente ingresada no es correcta');
}






