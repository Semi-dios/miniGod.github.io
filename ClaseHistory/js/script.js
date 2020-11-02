const btn = document.getElementById('btn');

btn.addEventListener("click", (e) => {
    e.preventDefault(e);
    const number = parseInt(Math.random() * 3);
    console.log(number);

    if (number == 0) {
        window.location = 'http://www.outlook.com';
    } else if (number == 1) {
        window.location = 'https://mail.google.com';
    } else if (number == 2) {
        window.location = 'https://espanol.yahoo.com';
    }
});