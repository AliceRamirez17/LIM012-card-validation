import validator from './validator.js';

console.log(validator);

function verificar(){
    const numeroTarjeta = document.getElementById('numero').value
    const invertido = numeroTarjeta.split('').reverse()
    

    const multiplicacion = []
    multiplicacion[0] = invertido[1];
    multiplicacion[1] = invertido[3];
    multiplicacion[2] = invertido[5];
    multiplicacion[3] = invertido[7];
    multiplicacion[4] = invertido[9];
    multiplicacion[5] = invertido[11];
    multiplicacion[6] = invertido[13];
    multiplicacion[7] = invertido[15];

    console.log(multiplicacion)


}



    //.reduce(function(r, n) { return r + parseInt(n) }, 0));
    //document.getElementById('resultado').innerHTML = split('')
    //console.log(typeof(resultado))

    var btn = document.getElementById('button');
    btn.addEventListener('click', verificar, false);

         
    // (parseInt(numeroTarjeta))