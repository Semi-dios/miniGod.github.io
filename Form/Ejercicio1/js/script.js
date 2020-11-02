const button = document.getElementById('btn');


button.addEventListener('click', (e) => {
    const int = document.getElementById('int').value;
    console.log(int);

    e.preventDefault();

    const cubo = Math.pow(int, 3);
    alert(`El cubo del numero ${int}   es: ${cubo}`);
})