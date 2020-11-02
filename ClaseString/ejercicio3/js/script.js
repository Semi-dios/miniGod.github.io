const searchText = (p) => {
    const text = document.getElementById('text');
    const result = text.toString().indexOf(p);
    console.log(result);

    if (result == -1) {
        console.log('No se encontro');
    } else {
        console.log('palabra encontrada : ', result);
    }
}



searchText('t');