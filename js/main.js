'use strict';

const pruebaTitle = document.querySelector ('.title');
let userRandomNumber = document.querySelector ('.jsintroduce')
const userClickButton = document.querySelector ('.jsbutton')
let trackForUser = document.querySelector ('.jstrack');

console.log(`Verificar`);
function handleTrack() {
    let gameTrack = trackForUser


    if (gameTrack === "") {
        trackForUser.innerHTML = 'Pista:Escribe el numero y dale a Prueba';
    } else if (gameTrack = userRandomNumber) {
        trackForUser.innerHTML = 'Has ganado';
    }
    else if (gameTrack < userRandomNumber) {
        trackForUser.innerHTML = 'Demasiado bajo';
    }
    else if (gameTrack > userRandomNumber) {
        trackForUser.innerHTML = 'Demasiado alto';
    }
    else if (gameTrack > 100 ) {
        trackForUser.innerHTML = 'Número inválido';
    }
}

userClickButton.addEventListener('keyup', handleTrack);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const max = 100;
const randomNumbermax = Math.ceil(Math.random() * max);
console.log (`número aleatorio ${randomNumbermax}`);
if (userRandomNumber === randomNumbermax) {

      userWin = 'Has ganado';
    console.log (`${userWin}`);

}
else if (userRandomNumber > randomNumbermax) {

}


userRandomNumber = 3;

userClickButton.addEventListener ( 'click' , getRandomNumber)


