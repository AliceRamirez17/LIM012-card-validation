import validator from './validator.js'; 

const ContenedorUno = document.getElementById('container');
const ContenedorDos = document.getElementById('container2');


let mensaje;
const btnValidar = document.getElementById('btnValidar');
const btnRegresar = document.getElementById('btnRegresar');
const btnSeguirCompra = document.getElementById('btnSeguirCompra');

btnValidar.addEventListener('click',(validacion)=>{

    //obteniendo el valor del input
    const numeroTarjeta = document.getElementById('numero').value;

    //responder al ingreso vacío
    //const ingresarValor = document.getElementById('numero');
    
    //llamar a la función isvalid
    let resultadoFinal = validator.isValid(numeroTarjeta);

    const textoAlert = document.getElementById('textoAlert');

    if(numeroTarjeta === ''){
        validacion.preventDefault();
        textoAlert.classList.remove('ocultar');
        textoAlert.innerHTML = 'Necesitas llenar este campo';
    }else{
        //mostrar y ocultar contenedores
        ContenedorDos.classList.add('mostrar');
        ContenedorUno.classList.remove('mostrar');
        ContenedorUno.classList.add('ocultar');

        if(resultadoFinal===true){ 
            mensaje = '¡TU TARJETA ES VÁLIDA!';
            document.getElementById("emoticon").src='img\\happy.svg';
            btnSeguirCompra.classList.remove('ocultar');
            btnRegresar.classList.add('ocultar');
        }else{
            mensaje= '¡TU TARJETA NO ES VÁLIDA!';
            document.getElementById("emoticon").src='img\\sad2.svg';
            btnRegresar.classList.remove('ocultar');
        }
    }

    //llamar a la función maskify
    let numeroOculto = validator.maskify(numeroTarjeta);

    //mostrar los mensajes
    const mostrarMensaje = document.getElementById('mensaje');
    mostrarMensaje.innerHTML = `${mensaje}`

    const mostrarResultado = document.getElementById('numeroOculto');
    mostrarResultado.innerHTML = `${numeroOculto}`

    btnRegresar.addEventListener('click',()=>{
        ContenedorUno.classList.add('mostrar');
        ContenedorDos.classList.remove('mostrar');
    
        document.getElementById('numero').value = "";
        textoAlert.classList.add('ocultar');
        textoAlert.innerHTML = "";
    })

});