const pizza = document.getElementById('pizza');




pizza.addEventListener('change', (e) => {

    const data = [{
        id: 0,
        value: 25000
    }, {
        id: 1,
        value: 25000
    }, {
        id: 2,
        value: 35008

    }, {
        id: 3,
        value: 35005

    }, {
        id: 4,
        value: 35007
    }]



    const ind = e.target.selectedIndex;
    console.log(ind);
    const values = document.getElementById("valor");


    for (let index = 0; index < data.length; index++) {
        if (ind == data[index].id) {
            console.log(data[index].value);
            values.value = data[index].value;

        }

    }
});