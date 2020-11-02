const ingresarPalabra = (palabra) => {
    const p = palabra.toString();
    const string_Arr = Array.from(p);
    console.log(string_Arr);
    let invertida = '';


    for (let index = string_Arr.length - 1; index >= 0; index--) {
        invertida += string_Arr[index];
    }


    if (invertida == palabra) {
        console.log('palindorma');
    } else {
        console.log('No palindroma');
    }

}

const pal = prompt('Ingrese un nombre').toLowerCase();




ingresarPalabra(pal);