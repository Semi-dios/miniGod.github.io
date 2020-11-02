const button = document.getElementById('btn');


button.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;


    const total = name.concat(lastname);

    const nameC = document.getElementById('nameC');

    nameC.value = total;



})