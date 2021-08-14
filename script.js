// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = '';


  function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.+-_|:;?~`'
	  return symbols[Math.floor(Math.random() * symbols.length)]};


  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
	  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

  function getRandomNumber() {
	  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
  
                      
  
if(generateBtn){
    
    generateBtn.addEventListener("click", () => {
    var length = prompt ("Please choose a password length between 8 and 128 characters", "Enter number between 8 and 128");
    length = +length;
    
    if (!length){
      return;}
  
    if (length < 8 || length > 128 || !Number.isInteger(length)) {
      window.alert ("Please enter a number between 8 and 128");}

    else{
    var symbols =  confirm ("Should the password contain special characters?");
    var lowercase =  confirm ("Should the password contain lowercase characters?");
    var uppercase =  confirm ("Should the password contain uppercase characters?");
    var numbers =  confirm ("Should the password contain numbers?");
    var inputCount = symbols + lowercase + uppercase + numbers;
    var charGenArray = [];
    

    if(inputCount === 0) {
      window.alert("Please affirm at least one selection.")
      return;}

    if(symbols === true){
      charGenArray.push(getRandomSymbol());}
    if(lowercase === true){
      charGenArray.push(getRandomLower());}
    if(uppercase === true){
      charGenArray.push(getRandomUpper());}
    if(numbers === true){
      charGenArray.push(getRandomNumber());}

      
      
      
      
      
      console.log(charGenArray);
    
      
    
    
    
    
    
      
   
      
      
    //   // create a loop
    //   for(let i=0; i<length; i+=typesCount) {
    //     typesArr.forEach(type => {
    //       const funcName = Object.keys(type)[0];
    //       generatedPassword += randomFunc[funcName]();
    //     });
    //   }
      
      
    }     
    
    


  })
}


// function writePassword() {
//  getRandomAF1 = password;
//  return
// }

// // function confirmInput() {
// //   var trueFalse;
// //   if (confirm()) {
// //     bool = true;
// //   } else {
// //     bool = false;
// //   }
