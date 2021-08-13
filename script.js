// Assignment Code
var lengthPrompt = prompt("Please choose a password length between 8 and 128 characters")
var specialPrompt = prompt("Should the password contain special characters?")
var lowercasePrompt = prompt("Should the password contain lowercase characters?")
var uppercasePrompt = prompt("Should the password contain uppercase characters?")
var numbersPrompt = prompt("Should the password contain numbers?")


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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