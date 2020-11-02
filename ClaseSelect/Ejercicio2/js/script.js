const procesador = document.getElementById('procesador');
const monitor = document.getElementById('monitor');
const Disco = document.getElementById('Disco');




procesador.addEventListener('change', (e) => {

    const data = [{
        id: 0,
        value: 400
    }, {
        id: 1,
        value: 600
    }, {
        id: 2,
        value: 700


    }]



    const ind = e.target.selectedIndex;
    console.log(ind);

    for (let index = 0; index < data.length; index++) {
        if (ind == data[index].id) {
            console.log(data[index].value);
            const a = data[index].value;
            ind.value = a;

        }

    }
});
monitor.addEventListener('change', (e) => {

    const data = [{
        id: 0,
        value: 250
    }, {
        id: 1,
        value: 350
    }, {
        id: 2,
        value: 550


    }]



    const ind = e.target.selectedIndex;
    console.log(ind);

    for (let index = 0; index < data.length; index++) {
        if (ind == data[index].id) {
            console.log(data[index].value);
            const b = data[index].value;
            ind.value = b;

        }

    }
});
Disco.addEventListener('change', (e) => {

    const data = [{
        id: 0,
        value: 300
    }, {
        id: 1,
        value: 440
    }, {
        id: 2,
        value: 500


    }]



    const ind = e.target.selectedIndex;

    console.log(ind);

    for (let index = 0; index < data.length; index++) {
        if (ind == data[index].id) {
            console.log(data[index].value);
            const c = data[index].value;
            ind.value = c;
        }

    }
});



const btn = document.getElementById('calcular');
btn.addEventListener('click', (e) => {
    e.preventDefault();

    let pros = procesador.options[procesador.selectedIndex].value;

    let mon = monitor.options[monitor.selectedIndex].value;
    let dis = Disco.options[Disco.selectedIndex].value;

    suma = parseInt(pros) + parseInt(mon) + parseInt(dis);
    alert(`Valor total ${suma}`);
})