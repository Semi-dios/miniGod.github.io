
var numbers = [];


for (let index = 0; index < 10; index++) {
  numbers[index] =  Math.floor(Math.random() * 1000)+1;
 
}





document.write('<br>' );

let suma = numbers.pop()+numbers.pop();
document.write('<br>' );
document.write('Total ' + suma);








