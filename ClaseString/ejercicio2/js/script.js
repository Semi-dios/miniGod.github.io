const ingresarNombre = () => {
    let nombres = []
    for (let index = 0; index < 99999; index++) {
        const x = prompt('Ingrese un nombre').toLowerCase();
        if (x == 'fin') {
            break;

        }
        nombres.push(x);




    }
    console.log(nombres);
    console.log("Cantidad ingresada " + nombres.length);
}

ingresarNombre();