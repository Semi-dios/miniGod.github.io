const pizza = document.getElementById('pizza');







const btn = document.getElementById('calcular');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const cant = document.getElementById('cant').value;
    const total = document.getElementById('total');

    let esc = pizza.options[pizza.selectedIndex].value;
    console.log(esc);
    console.log(cant);
    let pago = parseInt(esc) * cant;

    total.value = `${pago}`;



})