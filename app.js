let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarintento(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(intentos)
    console.log(numeroSecreto)
    if (numeroUsuario === numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
    document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else {
        if(numeroUsuario < numeroSecreto){
            asignarTextoElemento('p','Uff cerca! el numero es mayor:)');
        } else {
            asignarTextoElemento('p','No! el numero secreto es menor :)');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#numeroUsuario').value= '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros?
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles!');
    }else{
        // si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //iniciabilizar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute( "disabled" , true);
    
}

condicionesIniciales();
