const button = document.getElementById('btn');


button.addEventListener('click', (e) => {
    e.preventDefault(e);
    const pass = document.getElementById('pass').value;
    const Confpass = document.getElementById('Confpass').value;

    if (pass === Confpass) {
        console.log("Las contraseñas son iguales");
    } else {
        console.error("Contraseñas no son iguales");
    }
})