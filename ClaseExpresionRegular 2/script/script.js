

let credit = prompt('Ingrese un numero de tarjeta');

let patron = /\d{3}\-\d{3}\-\d{3}\-\d{3}/;

if (patron.test(credit)){
  alert(' you Credit card is correct');
}else {
  alert('you Credit card not is correct');
}






