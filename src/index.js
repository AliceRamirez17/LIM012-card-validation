import validator from './validator.js'; 

const ContenedorUno = document.getElementById('container');
const ContenedorDos = document.getElementById('container2');
ContenedorDos.classList.add('ocultar');

let mensaje;
const btn = document.getElementById('button');

btn.addEventListener('click',()=>{

    //obteniendo el valor del input
    const numeroTarjeta = document.getElementById('numero').value;

    //responder al ingreso vacío
    const ingresarValor = document.getElementById('numero');
    
    //llamar a la función isvalid
    let resultadoFinal = validator.isValid(numeroTarjeta);

    if(ingresarValor.checkValidity()==false&&ingresarValor.required){
        alert('Debe ingresar el número de tarjeta');   
    }else{
        //mostrar y ocultar contenedores
        ContenedorDos.classList.add('mostrar');
        ContenedorUno.classList.remove('mostrar');
        ContenedorUno.classList.add('ocultar');

        if(resultadoFinal===true){ 
            mensaje = '¡TU TARJETA ES VÁLIDA!';
            document.getElementById("emoticon").src='img\\happy.svg';
        }else{
            mensaje= '¡TU TARJETA NO ES VÁLIDA!';
            document.getElementById("emoticon").src='img\\sad2.svg';
        }
    }

    //llamar a la función maskify
    let numeroOculto = validator.maskify(numeroTarjeta);

    //mostrar los mensajes
    const mostrarMensaje = document.getElementById('mensaje');
    mostrarMensaje.innerHTML = `${mensaje}`

    const mostrarResultado = document.getElementById('numeroOculto');
    mostrarResultado.innerHTML = `${numeroOculto}`
});

const btnRegresar = document.getElementById('botonRegresar');

btnRegresar.addEventListener('click',()=>{
    ContenedorUno.classList.add('mostrar');
    ContenedorDos.classList.remove('mostrar');

    document.getElementById('numero').value = "";

});