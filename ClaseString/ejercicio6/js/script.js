const ingresaString = (palabra) => {

    const p = palabra.toString();
    const Arr = Array.from(p);
    let tamanio = Arr.length;


    console.log(Arr.slice(0, (tamanio / 2)));
    console.log(Arr.slice(tamanio - 1));
    let invertida = '';
    for (let index = tamanio - 1; index >= 0; index--) {
        invertida += Arr[index];
    }
    console.log(invertida);

}

const cadena = prompt('Ingrese una palabra').toLowerCase();




ingresaString(cadena);