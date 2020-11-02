const name = document.getElementById('name');
const pas = document.getElementById('pass');

const btn = document.getElementById('btn');


pas.addEventListener('blur', (e) => {
    e.preventDefault();
    console.log(pas.value);
    if (pas.value < 7) {
        alert('Contraseña menor de  7 caracteres');
    } else if (pas.value > 20) {
        alert('Contraseña mayor a 20 caracteres');
    }
})