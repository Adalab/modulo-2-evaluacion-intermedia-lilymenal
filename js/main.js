'use strict';

const backgroundContainer = document.querySelector ('.js-container');
const gameRules = document.querySelector ('.js-rules');
const containerRules = document.querySelector ('.js-containerRules');
const userRandomNumber = document.querySelector ('.jsintroduce')
const userClickButton = document.querySelector ('.jsbutton')
const trackForUser = document.querySelector ('.jstrack');
const counterIterations = document.querySelector ('.jshits')


// Muestra la regla del juego:

function handleRules(params) {
    containerRules.innerHTML += `<div class="rulesStyles"><p>Regla del juego: Introduce un número entre 1 y 100; con click en prueba verás si aciertas. ¡suerte!</p></div>`;
}

gameRules.addEventListener ("click", handleRules);

// Genera un número aleatorio.
const max= 100;
function getRandomNumber() {
    const randomNumber = Math.ceil(Math.random() * max)
        return randomNumber;               
}

// Guarda el número aleatorio en una constante para trabajar con él.
const Random = getRandomNumber ();
console.log (Random);

// Variable creada para guardar los datos del contador.
let iterations = 0;

// Compara gameNumber (el número del usuario) con Random (el número aleatorio).
function handleTrack() {
    const gameNumber = parseInt(userRandomNumber.value);

    if (gameNumber > 100 ) {
        trackForUser.innerHTML = 'Número inválido, recuerda la regla';
    }   
    else if (gameNumber < 1 ) {
            trackForUser.innerHTML = 'Número inválido, recuerda la regla';
     
    }   else if (Random === gameNumber) {
        backgroundContainer.classList.add ("fondo");
        trackForUser.classList.add ("styles");
        trackForUser.innerHTML = '&#129321 ¡Lo conseguiste, felicitaciones! &#129321';
    }
        else if (Random < gameNumber) {
        trackForUser.innerHTML = 'Demasiado alto, sigue intentándolo &#129299';
    }
        else if (Random > gameNumber) {
        trackForUser.innerHTML = 'Demasiado bajo, sigue intentándolo &#129299';
    }
    else {
        trackForUser.innerHTML = 'Escribe un número y dale a Prueba; ten en cuenta la regla';
    }
    counter ();
}

// Genera un contador para saber las veces que ha jugado.
function counter() {
    iterations ++;
    counterIterations.innerHTML = `Número de intentos: ${iterations}`;
}

userClickButton.addEventListener ("click", handleTrack);
