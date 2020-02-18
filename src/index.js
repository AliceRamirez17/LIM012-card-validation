import validator from './validator.js';

console.log(validator);

const mostrarContenedorUno = document.getElementById('container');
mostrarContenedorUno.classList.add('mostrar')

const ocultarContenedorDos = document.getElementById('container2');
ocultarContenedorDos.classList.add('ocultar');

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

    console.log('Array de número invertido',NewArray);

    // seleccionar las posiciones impares
    let listaImpares = [];

    for(let i=0; i<NewArray.length; i++){
        if(i%2!==0){
            listaImpares.push(NewArray[i]*2);
        }else{
            listaImpares.push(NewArray[i]*1);
        }
    }

    console.log('lista posiciones impares *2',listaImpares);

    //sumar los digitos mayores a 10
    let lista2 = [];

    for(let i=0; i<listaImpares.length; i++){
        if(listaImpares[i]>=10){
        lista2.push((listaImpares[i]-10)+1);
        }else{
        lista2.push(listaImpares[i]*1);
        }
    }

    console.log('digitos de números >10',lista2);

    //suma de los elementos del array
    const total = lista2.reduce((sum, current) => sum + current, 0);
    console.log(total);


    //verificar si la suma da un múltiplo de 10
    let verificado = false;
    if(total%10===0){
        verificado = true
    }

    console.log(verificado);
}

function maskify(){
    const numeroTarjeta2 = document.getElementById('numero').value;
    let maskify = '';
    for(let i=0; i<numeroTarjeta2.length; i++){
        if(i<=numeroTarjeta2.length-5){
            maskify = maskify + '#';
        }else{
            maskify = maskify + numeroTarjeta2[i]*1;
        }
    }
    console.log(maskify);
}

function segundaVentana(){
    const mostrarContenedorDos = document.getElementById('container2');
    mostrarContenedorDos.classList.add('mostrar');

    const ocultarContenedorUno = document.getElementById('container');
    ocultarContenedorUno.classList.remove('mostrar');
    ocultarContenedorUno.classList.add('ocultar');
}


const btn = document.getElementById('button');
btn.addEventListener('click', obtenerNumero, false);
btn.addEventListener('click', maskify, false);
btn.addEventListener('click', segundaVentana, false);