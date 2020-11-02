


var days = [];
var min =[];
var max =[];




for (let index = 0; index < 10; index++) {
     days[index] =  Math.floor(Math.random() * 500)+1;
     if (days[index] < 250) {
      min[index]= days[index];
     }else {
      max[index]= days[index];
     }
}

document.write('UNO');
for (let index = 0; index < days.length; index++) {
     document.write(' <br>',days[index] );
}
document.write(' <br>');
document.write('DOS');

for (let index = 0; index < min.length; index++) {
     document.write(' <br>',min[index] );
}

document.write(' <br>');
document.write('TRES');
for (let index = 0; index < max.length; index++) {
     document.write(' <br>',max[index] );
}











