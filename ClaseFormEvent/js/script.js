const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');





uno.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(`Numero uno`);
})
dos.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(`Numero dos`);
})
tres.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(`Numero tres`);
})