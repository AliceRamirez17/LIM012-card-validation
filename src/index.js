import validator from './validator.js';

console.log(validator);

function obtenerNumero(){
    // Obtener el valor el input
    const numeroTarjeta = document.getElementById('numero').value;
    
    // invertir el texto
    const size = numeroTarjeta.length;
    const lastPosition = size-1;

    let textoInvertido = '';

    for(let i=lastPosition; i>=0; i--){
        textoInvertido = textoInvertido + numeroTarjeta[i];
    }

    // convertir el texto a un número y convertirlo en un array
    const NewArray = Array.from(textoInvertido).map(Number);

    // 

    console.log(NewArray);

}

const btn = document.getElementById('button');
btn.addEventListener('click', obtenerNumero, false);