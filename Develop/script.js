// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //initialize the password questions
  var enter = confirm("Would you like to make a password?")
  
  //if they want to make a password start confirming their preferences
  if(enter){
    alert("Your password must contain at least 8 characters and no more than 128 characters")
    var passnum = Number(prompt("How many characters would you like your password to have? "));

    if (passnum != null && Number.isInteger(passnum)&& passnum >=8 && passnum<=128){
      alert("Great, let's make a password " +passnum + " characters long")
    }
    else if(passnum != null && !Number.isInteger(passnum)){
      do{
        alert("Please enter a valid number between 8 and 128")
        var passnum = Number(prompt("How many characters would you like your password to have? "));
        if (passnum != null && Number.isInteger(passnum)&& passnum >=8 && passnum<=128){
        alert("Great, let's make a password " +passnum + " characters long")
        }
      }
      while(!Number.isInteger(passnum))
    }
    else{
    
    }

    var prefLowercase = confirm("Would you like to have lowercase characters in your password?")
    var prefUppercase = confirm("Would you like to have uppercase characters in your password?")
    var prefNumeric = confirm("Would you like to have numeric characters in your password?")
    var prefSpecial = confirm("Would you like to have special characters in your password?")

    console.log(prefLowercase)
    console.log(prefUppercase)
    console.log(prefSpecial)
    console.log(prefNumeric)

    if(!prefNumeric && !prefSpecial && !prefUppercase && !prefLowercase){
      alert("you need some characters ya dummy")
    }

    //password generation
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  //if they don't want to make a password then exit
  else{
    alert("FINE :( have a nice day!")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
