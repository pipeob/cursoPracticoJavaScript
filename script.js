const input = document.querySelector('#input');
const display = document.querySelector('.display');
const btnIgual = document.querySelector('#igual');
const btnSuma = document.querySelector('#suma');
const btnResta = document.querySelector('#resta');
const opcion = document.querySelector('.op');

let resultado;

btnSuma.addEventListener('click', opSuma);

function opSuma(){
    resultado = Number(input.value) + 5;
}

btnIgual.addEventListener('click', opIgual);

function opIgual(){
    input.value = resultado;
}

btnResta.addEventListener('click', opResta);

function opResta(){
    resultado = Number(input.value) - 5;
}

// opcion.addEventListener('click', funOpcion);

// function funOpcion(){
//     input.value = ;
// }