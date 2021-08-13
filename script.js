// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordArray = [];

// Add event listener to generate button
if(generateBtn){
    generateBtn.addEventListener("click", () => {
        var lengthInput = +length;
        var symbolsInput =  symbols;
        var upperInput = uppercase;
        var lowerInput = lowercase;
        var numbersInput = numbers;

    console.log(lengthInput, symbolsInput, upperInput, lowerInput, numbersInput);
  })
};



const randomFunc = { 
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var length = prompt ("Please choose a password length between 8 and 128 characters", "Enter number between 8 and 128");
var symbols =  confirm ("Should the password contain special characters?");
var lowercase =  confirm ("Should the password contain lowercase characters?");
var uppercase =  confirm ("Should the password contain uppercase characters?");
var numbers =  confirm ("Should the password contain numbers?");

// // Test for correct length user input
// if (length < 8 || length > 128 || length !== int) {
//   alert ("Please enter a number between 8 and 128");



function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.+-_|:;?~`'
	return symbols[Math.floor(Math.random() * symbols.length)];
}



// function confirmInput() {
//   var trueFalse;
//   if (confirm()) {
//     bool = true;
//   } else {
//     bool = false;
//   }
