import validator from './validator.js';

console.log(validator);

const numeroTarjeta = document.getElementById('numero');
const newArray = [];

const cadena = function submit(){
    newArray.push(numeroTarjeta.value);
    var convertirCadena = newArray.toString().split("");
    console.log(convertirCadena);
}


    const btn = document.getElementById('button');
    btn.addEventListener('click', cadena, false);