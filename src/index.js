/* import { clean } from 'gh-pages';
import validator from './validator.js';

console.log(validator); */

/*---------función que se encarga de limpiar los campos del formulario------------*/

function cleanFormFields() {
    alert("¿estas seguro de que deseas borrar todo?");
};

let bntClean = document.getElementById("clean");
bntClean.addEventListener("click", cleanFormFields);

/*---------función que se encarga de actualizar los datos de la tarjeta------------*/

function updateCardName(event){
    let nameValue = event.target.value; 

    let cardName = document.getElementById("nameCard");

    cardName.innerHTML = nameValue;
};

let inputCardName = document.getElementById("nameForm");
inputCardName.addEventListener("input", updateCardName);


function updateCardNumber(event){
    let numberValue = event.target.value;

    let cardNumber = document.getElementById("numberCard");
    
    cardNumber.innerHTML = numberValue;
};

let inputCardNumber = document.getElementById("numbForm");
inputCardNumber.addEventListener("input", updateCardNumber);

function updateCardCvv(event){
    let cvvValue = event.target.value;

    let cardCVV = document.getElementById("cvvCard");

    cardCVV.innerHTML = cvvValue;
}; 

let inputCardCvv = document.getElementById("codeCvvForm");
inputCardCvv.addEventListener("input", updateCardCvv);

function updateCardMonth(event){
    let monthValue = event.target.value;

    let cardMonth = document.getElementById("dateCardMonth");
    
    cardMonth.innerHTML = monthValue;
};

let inputCardMonth = document.getElementById("dateFormMonth");
inputCardMonth.addEventListener("input", updateCardMonth);

function updateCardYear(event){
    let yearValue = event.target.value;

    let cardYear = document.getElementById("dateCardYear");
    
    cardYear.innerHTML = yearValue;
};

let inputCardYear = document.getElementById("dateFormYear");
inputCardYear.addEventListener("input", updateCardYear);

/* función que se encarga de validar la tarjeta*/

/* function validateCard(){

}; */



