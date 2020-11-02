const btn = document.getElementById('btn');
const may = document.getElementById('may');
const men = document.getElementById('men');


btn.addEventListener('click', () => {
    if (may.checked == true) {
        alert('Es mayor de edad');
    } else {
        alert('Es menor de edad');
    }
})