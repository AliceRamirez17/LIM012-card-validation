import validator from './validator.js'; 

const mostrarContenedorUno = document.getElementById('container');
const mostrarContenedorDos = document.getElementById('container2');
mostrarContenedorDos.classList.add('ocultar');

let mensaje;
let imagen;
const btn = document.getElementById('button');

btn.addEventListener('click',()=>{

    //obteniendo el valor del input
    const numeroTarjeta = document.getElementById('numero').value;

    //responder al ingreso vacío
    const ingresarValor = document.getElementById('numero');
    
    document.getElementById("emoticon").src='src/img';

    //llamar a la función isvalid
    let resultadoFinal = validator.isValid(numeroTarjeta);

    if(ingresarValor.checkValidity()==false&&ingresarValor.required){
        alert('Debe ingresar el número de tarjeta');
    }else{
        if(resultadoFinal===true){
            mensaje = '¡TU TARJETA ES VÁLIDA!';
            imagen = 'happy.svg';
        }else{
            mensaje= '¡TU TARJETA NO ES VÁLIDA!';
            imagen = 'sad.svg';
        }
    }

    //llamar a la función maskify
    let numeroOculto = validator.maskify(numeroTarjeta);

    //mostrar los mensajes
    const mostrarMensaje = document.getElementById('mensaje');
    mostrarMensaje.innerHTML = `${mensaje}`

    const mostrarEmoticon = document.getElementById('emoticon');
    mostrarEmoticon.innerHTML = `${imagen}`

    const mostrarResultado = document.getElementById('numeroOculto');
    mostrarResultado.innerHTML = `${numeroOculto}`

    //mostrar y ocultar contenedores
    mostrarContenedorDos.classList.add('mostrar');
    mostrarContenedorUno.classList.remove('mostrar');
    mostrarContenedorUno.classList.add('ocultar');
    
});