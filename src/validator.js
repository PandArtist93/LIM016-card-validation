const validator = {
  isValid: function(creditCardNumber){
    //console.log(creditCardNumber);
    let validationDigit = creditCardNumber[creditCardNumber.length -1]
    let realCreditCardNumber = creditCardNumber.substr(0, creditCardNumber.length - 1);
    //console.log(realCreditCardNumber);
    let cardNumbInt = newArrayNumb(realCreditCardNumber);
    for (let i = 0; i < cardNumbInt.length; i = i+2){
      cardNumbInt[i] = cardNumbInt[i] * 2;
      if(cardNumbInt[i] > 9){
        let lastDigit = cardNumbInt[i] % 10;
        let firstDigit = Math.floor(cardNumbInt[i] / 10);
        cardNumbInt[i] = firstDigit + lastDigit;
      }      
    }
    let sumTotal = sumNumbArray(cardNumbInt);
    //console.log(sumTotal);
   
    if (sumTotal != 0){
      if (validationDigit == 10 - (sumTotal % 10)){
        
        return true
      }
      return false   
    }
    return false  
  },

  maskify: function(creditCardNumber){
    let numbString = creditCardNumber;
    if(numbString.length < 5){
      return numbString
    }
    
    let newArrayNumbStrig = "";
    for (let i = 0; i < numbString.length; i++){
      if (i < numbString.length-4){
        newArrayNumbStrig += "#";
      }
      else {
        newArrayNumbStrig += numbString[i];
      }      
    }  
    return newArrayNumbStrig
  }
};

//función que se encarga de convertir el número de la tarjeta del tipo string en un arreglo de int
function newArrayNumb(stringCardNumb){
  
  let numbArray = [];
  for (let i = stringCardNumb.length -1 ; i > -1 ; i--){
      numbArray.push(parseInt(stringCardNumb[i]));      
  } 
  return numbArray 
}

//función que se encarga de realizar la suma de todos los digitos de la tarjeta durante el algoritmo de luhn
function sumNumbArray (numbArray){
  let sumNumb = 0;
  for (let i = 0; i < numbArray.length; i++){
    sumNumb = sumNumb + numbArray[i];
  }  
  return sumNumb
}

//función que se encarga de separar los digitos de la tarjeta de credito cada cuatro elementos
/* function separateNumbInGroupTo4 (stringCardNumb){  
  let transform = "";
  for(let i = 0; i < stringCardNumb.length; i += 4){
    transform.push(stringCardNumb.substr(i, 4));
    console.log(transform.join(' '));
  }
  return transform
} */

export default validator;

