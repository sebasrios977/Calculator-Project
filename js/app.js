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


const screen1 = document.getElementById('first-row');
const screen2 = document.getElementById('second-row');

let num1 = [];
let num2 = [];
let operation;

let beforeOperation = true;


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

eventListeners();

function Seven() {
    if ( beforeOperation ){
        num1 = [ ...num1, 7 ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, 7 ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }

}

function Eight() {
    if ( beforeOperation ){
        num1 = [ ...num1, 8 ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, 8 ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }
}

function Nine() {
    if ( beforeOperation ){
        num1 = [ ...num1, 9 ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, 9 ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }
}

function Four() {
    if ( beforeOperation ){
        num1 = [ ...num1, 4 ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, 4 ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }
}

function Five() {
    if ( beforeOperation ){
        num1 = [ ...num1, 5 ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, 5 ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }
}

function Six() {
    if ( beforeOperation ){
        num1 = [ ...num1, 6 ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, 6 ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }
}

function One() {
    if ( beforeOperation ){
        num1 = [ ...num1, 1 ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, 1 ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }
}

function Two() {
    if ( beforeOperation ){
        num1 = [ ...num1, 2 ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, 2 ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }
}

function Three() {
    if ( beforeOperation ){
        num1 = [ ...num1, 3 ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, 3 ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }
}

function Zero() {
    if ( beforeOperation ){
        num1 = [ ...num1, 0 ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, 0 ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }
}

function Point() {
    if ( beforeOperation ){
        num1 = [ ...num1, '.' ];
        num1 = num1.toString().replace(/,/g,"");
        console.log( num1 );
        screen1.innerHTML = num1;
    } else {
        num2 = [ ...num2, '.' ];
        num2 = num2.toString().replace(/,/g,"");
        console.log( num2 );
        screen1.innerHTML = num2;
    }
}

function Plus() {
    beforeOperation = false;
    operation = 'plus';
}

function Multiply() {
    beforeOperation = false;
    operation = 'multiply';
}

function Divide() {
    beforeOperation = false;
    operation = 'divide';
}

function Minus() {
    beforeOperation = false;
    operation = 'minus';
}

function Equal() {

    beforeOperation = true;

    switch ( operation ){
        case 'plus':
            num1 = Number( num1 ) + Number( num2 );
            num2 = '';
            console.log( num1 );
            break;
        case 'multiply':
            num1 = Number( num1 ) * Number( num2 );
            num2 = '';
            console.log( num1 );
            break;
        case 'divide':
            num1 = Number( num1 ) / Number( num2 );
            num2 = '';
            console.log( num1 );
            break;
        case 'minus':
            num1 = Number( num1 ) - Number( num2 );
            num2 = '';
            console.log( num1 );
            break;
    }
    screen2.innerHTML = num1;
}

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
        console.log( num1 );
    } else {
        num2 = num2.substring( 0, num2.length - 1 );
        screen1.innerHTML = num2;
        console.log( num2 );
    }
}