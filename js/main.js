'use strict';

const pruebaTitle = document.querySelector ('.title');

console.log(`Verificar`);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = Math.ceil(Math.random() * 100);

console.log (`número aleatorio ${randomNumber}`);