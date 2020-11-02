class suma {

    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    get returnSuma() {
        return this.valor1 + this.valor2;
    }

}








/* Implementacion */


let sumar = new suma(15, 25);
alert(`La suma de los dos valores es: ` + sumar.returnSuma); 