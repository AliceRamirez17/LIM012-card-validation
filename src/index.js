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
    
    const total = lista2.reduce((sum, current) => sum + current, 0);
    console.log(total);

    let verificado = false;
    if(total%10===0){
        return true
    }

    console.log(verificado);
    
}

const btn = document.getElementById('button');
btn.addEventListener('click', obtenerNumero, false);