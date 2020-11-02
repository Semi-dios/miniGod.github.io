const button = document.getElementById('btn');


button.addEventListener('click', (e) => {
    const int = document.getElementById('int').value;
    const int2 = document.getElementById('int2').value;



    if (int > int2) {
        alert(`Numero mayor ${int}`);
    } else if (int2 > int) {
        alert(`Numero mayor ${int2}`);
    } else {
        alert("Numeros iguales");
    }


})