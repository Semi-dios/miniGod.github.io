

let credit = prompt('Ingrese una fecha');

let patron = /[Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday]\s\d{1,2}$/;

if (patron.test(credit)){
  alert(' Date is correct');
}else {
  alert('Date not is correct');
}






