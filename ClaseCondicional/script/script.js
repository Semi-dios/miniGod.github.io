
let number = parseFloat(prompt('Ingrese un valor '));
let descuento = (porc, value)=> {
    return  value - ((value*porc)/100);
}

number > 10000 ?   document.write('Descuento del 10% '+descuento(10, number))  : document.write('Descuento del 5% '+descuento(5, number));



