var generateBtn = document.querySelector("#generate");

// Random characters and numbers generators.
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
  
// Begin main algorithm.
if(generateBtn){
    
    generateBtn.addEventListener("click", () => {
    var length = prompt ("Please choose a password length between 8 and 128 characters", "Enter number between 8 and 128");
    length = +length;
   
    // Character length and type input condition check.
    if (length < 8 || length > 128 || !Number.isInteger(length)) {
      window.alert ("Please enter a number between 8 and 128");
    return;}
    

    else{
    // Assign inputs to variables.
    var symbols =  confirm ("Should the password contain special characters?");
    var lowercase =  confirm ("Should the password contain lowercase characters?");
    var uppercase =  confirm ("Should the password contain uppercase characters?");
    var numbers =  confirm ("Should the password contain numbers?");
    var inputCount = symbols + lowercase + uppercase + numbers;

    // Create empty arrays.
    var charGenArray = [];
    var passwordArray = [];


    // Minimally required user selction verification.
    if(inputCount === 0) {
      window.alert("Please affirm at least one selection.")
      return;}

    
      // Password generator. Password pushed into charGenArray.
      for(i = 0; i < length; i++){
      if(symbols === true){
        charGenArray.push(getRandomSymbol());}
      if(lowercase === true){
        charGenArray.push(getRandomLower());}
      if(uppercase === true){
        charGenArray.push(getRandomUpper());}
      if(numbers === true){
        charGenArray.push(getRandomNumber());}
        
      passwordArray.splice(0, 0, charGenArray[Math.floor(Math.random() * charGenArray.length)])
      
    }

    // Convert password array into string without commas.
    var password = passwordArray.join("");
    
    
    // Display password in viewport.
    document.getElementById("password").innerHTML = password;    

}})}  