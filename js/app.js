// Botones
const keyC = document.querySelector('#c');
const keyDelete = document.querySelector('#delete');
const keyDivide = document.querySelector('#divide');

const keySeven = document.querySelector('#seven');
const keyEight = document.querySelector('#eight');
const keyNine = document.querySelector('#nine');
const keyMultiply = document.querySelector('#multiply');

const keyFour = document.querySelector('#four');
const keyFive = document.querySelector('#five');
const keySix = document.querySelector('#six');
const keyMinus = document.querySelector('#minus');

const keyOne = document.querySelector('#one');
const keyTwo = document.querySelector('#two');
const keyThree = document.querySelector('#three');
const keyPlus = document.querySelector('#plus');

const keyPoint = document.querySelector('#point');
const keyZero = document.querySelector('#zero');
const keyEqual = document.querySelector('#equal');

// Pantallas
const screen1 = document.getElementById('first-row');
const screen2 = document.getElementById('second-row');

// Declaracion de variables vacias
let num1 = [];
let num2 = [];
let operation;

let beforeOperation = true;


eventListeners();

function eventListeners(){

    // Funciones con num1eros

    keySeven.addEventListener( 'click', Seven );
    keyEight.addEventListener( 'click', Eight );
    keyNine.addEventListener( 'click', Nine );
    keyFour.addEventListener( 'click', Four );
    keyFive.addEventListener( 'click', Five );
    keySix.addEventListener( 'click', Six );
    keyOne.addEventListener( 'click', One );
    keyTwo.addEventListener( 'click', Two );
    keyThree.addEventListener( 'click', Three );
    keyZero.addEventListener( 'click', Zero );
    keyPoint.addEventListener( 'click', Point );

    // Funciones con operaciones

    keyPlus.addEventListener( 'click', Plus );
    keyMultiply.addEventListener( 'click', Multiply );
    keyDivide.addEventListener( 'click', Divide );
    keyMinus.addEventListener( 'click', Minus );
    keyEqual.addEventListener( 'click', Equal );

    // Teclas especiales

    keyC.addEventListener( 'click', C );
    keyDelete.addEventListener( 'click', Delete );
}

function Seven() {
    Operational( 7 );
}

function Eight() {
    Operational( 8 );
}

function Nine() {
    Operational( 9 );
}

function Four() {
    Operational( 4 );
}

function Five() {
    Operational( 5 );
}

function Six() {
    Operational( 6 );
}

function One() {
    Operational( 1 );
}

function Two() {
    Operational( 2 );
}

function Three() {
    Operational( 3 );
}

function Zero() {
    Operational( 0 );
}

function Point() {
    Operational( '.' );
}

// Funcion que agrega los numeros al string

function Operational ( num ) {

    if ( beforeOperation ){
        num1 = num1 + `${ num }`;
        screen1.innerHTML = num1;
    } else {
        num2 = num2 + `${ num }`;
        screen1.innerHTML = num2;
    }
}

// Funciones de operacion

function Plus() {
    beforeOperation = false;
    num2 = '';
    operation = 'plus';
}

function Multiply() {
    beforeOperation = false;
    num2 = '';
    operation = 'multiply';
}

function Divide() {
    beforeOperation = false;
    num2 = '';
    operation = 'divide';
}

function Minus() {
    beforeOperation = false;
    num2 = '';
    operation = 'minus';
}

// Funciones de teclas especiales

function C() {
    beforeOperation = true;
    
    num1 = '';
    num2 = '';
    screen1.innerHTML = '';
    screen2.innerHTML = '';
}

function Delete() {
    if ( beforeOperation ){
        num1 = num1.substring( 0, num1.length - 1 );
        screen1.innerHTML = num1;
    } else {
        num2 = num2.substring( 0, num2.length - 1 );
        screen1.innerHTML = num2;
    }
}

function Equal() {

    switch ( operation ){
        case 'plus':
            num1 = Number( num1 ) + Number( num2 );
            console.log( num1 );
            break;
        case 'multiply':
            num1 = Number( num1 ) * Number( num2 );
            console.log( num1 );
            break;
        case 'divide':
            num1 = Number( num1 ) / Number( num2 );
            console.log( num1 );
            break;
        case 'minus':
            num1 = Number( num1 ) - Number( num2 );
            console.log( num1 );
            break;
    }
    screen2.innerHTML = num1;
}