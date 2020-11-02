

let hour = prompt('Ingrese una hora en formato hh:mm:ss o hh:mm. ');

let patron = /^((0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$ || (0[1-9]|1\d|2[0-3]):([0-5]\d)$)/;

if (patron.test(hour)){
  alert(' Hour is correct');
}else {
  alert('Hour not is correct');
}






