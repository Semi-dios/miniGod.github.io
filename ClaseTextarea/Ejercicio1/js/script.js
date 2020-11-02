const btn = document.getElementById('btn');



btn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const mail = document.getElementById('eMail').value;
    const Area = document.getElementById('comentario').value;
    if (Area.length > 0) {
        alert(`${name} se ha registrado con el email : ${mail} y anexo  ${Area}`);
    } else {
        alert(`${name} se ha registrado con el email : ${mail} `);
    }


})