const btn = document.getElementById('btn');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const alto = window.screen.availHeight;
    const ancho = window.screen.width;

    console.log(alto);

    window.open(url = 'http://localhost/jquery/JavaScript/programacion/ClaseScreen/?', width = ancho, height = alto);

});