const futbol = document.getElementById('futbol');
const bascke = document.getElementById('bascke');
const tenis = document.getElementById('tenis');
const btn = document.getElementById('btn');


/* tenis.addEventListener('change', (e) => {
    let sumT = 0;
    if (e.target.checked == true) {

        sumT = sumT + 1;
        console.log(sumT);
    }
}); */



btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (futbol.checked) {
        console.log("Escogio el deporte futbol");
    }
    if (bascke.checked) {
        console.log("Escogio el deporte basket");
    }
    if (tenis.checked) {
        console.log("Escogio el deporte tenis");
    }

})