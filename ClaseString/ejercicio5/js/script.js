const verifyEmail = (email) => {
    const cor = email.toString();
    const string_Arr = Array.from(cor);
    console.log(string_Arr);



    for (let index = 0; index < string_Arr.length; index++) {
        if (string_Arr[index] == '@') {
            console.log('Es email');
            break
        } else {
            console.log('No es email');
        }
    }




}

const email = prompt('Ingrese un correo electronico').toLowerCase();




verifyEmail(email);