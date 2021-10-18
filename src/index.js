//import { clean } from 'gh-pages';
import validator from './validator.js';

//console.log(validator);

/*---------función que se encarga de limpiar los campos del formulario------------*/

function cleanFormFields() {
    alert("¿estas seguro de que deseas borrar todo?");
        
}

let cleanFieldsBnt = document.getElementById("clean");
cleanFieldsBnt.addEventListener("click", cleanFormFields);

/*---------función que se encarga de actualizar los datos de la tarjeta------------*/

function updateCardName(event){
    event.target.value = event.target.value.replace(/\d/g,'');
    let nameValue = event.target.value; 
    let cardName = document.getElementById("nameCard");
    cardName.innerHTML = nameValue;

}

let inputCardName = document.getElementById("nameForm");
inputCardName.addEventListener("input", updateCardName);


function updateCardNumber(event){
    event.target.value = event.target.value.replace(/\D/g,'');
    let numberValue = event.target.value;
    let cardNumber = document.getElementById("numberCard");    
    cardNumber.innerHTML = validator.maskify(numberValue);

}

let inputCardNumber = document.getElementById("numbForm");
inputCardNumber.addEventListener("input", updateCardNumber);

function updateCardCvv(event){
    event.target.value = event.target.value.replace(/\D/g,'');
    let cvvValue = event.target.value;    
    let cardCVV = document.getElementById("cvvCard");
    cardCVV.innerHTML = cvvValue;    
}

let inputCardCvv = document.getElementById("codeCvvForm");
inputCardCvv.addEventListener("input", updateCardCvv);

function updateCardMonth(event){
    event.target.value = event.target.value.replace(/\D/g,'');
    let monthValue = event.target.value;
    let cardMonth = document.getElementById("dateCardMonth");    
    cardMonth.innerHTML = monthValue;
}

let inputCardMonth = document.getElementById("dateFormMonth");
inputCardMonth.addEventListener("input", updateCardMonth);

function updateCardYear(event){
    event.target.value = event.target.value.replace(/\D/g,'');
    let yearValue = event.target.value;
    let cardYear = document.getElementById("dateCardYear");    
    cardYear.innerHTML = yearValue;
}

let inputCardYear = document.getElementById("dateFormYear");
inputCardYear.addEventListener("input", updateCardYear);

function validaterCardNumb(event){
    //console.log(event);
    event.preventDefault();
    
    let cardNumb = document.getElementById("numbForm");
    let cardNumbValue = cardNumb.value;

    if (cardNumbValue.length <= 16){
        let result = validator.isValid(cardNumbValue);
        if (result == true){
            alert("tu tarjeta es válida!");
        }
        else {
            alert("tu tarjeta no es válida, por favor ingresa la tarjeta correctamente");
        }        
    }
    else{
        alert("Debes ingresar un número de tarjeta válido\nEl número de la tarjeta es valido si posee máximo 16 dígitos");
    }
}

let validateCardBtn = document.getElementById("validateBtn");
validateCardBtn.addEventListener("click", validaterCardNumb);



