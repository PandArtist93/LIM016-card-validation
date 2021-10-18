const validator = {
  isValid: function(creditCardNumber){
    console.log(creditCardNumber);
    let validationDigit = creditCardNumber[creditCardNumber.length -1]
    let realCreditCardNumber = creditCardNumber.substr(0, creditCardNumber.length - 1);
    console.log(realCreditCardNumber);
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
    console.log(sumTotal);

    /* if (sumTotal != 0 && sumTotal % 10 == 0){
      return true
    }
    else{
      return false
    } */

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


function newArrayNumb(stringCardNumb){
  
  let numbArray = [];
  for (let i = stringCardNumb.length -1 ; i > -1 ; i--){
      numbArray.push(parseInt(stringCardNumb[i]));      
  } 
  return numbArray 
}

function sumNumbArray (numbArray){
  let sumNumb = 0;
  for (let i = 0; i < numbArray.length; i++){
    sumNumb = sumNumb + numbArray[i];
  }  
  return sumNumb
}

export default validator;

