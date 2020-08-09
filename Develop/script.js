// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ['!','@','#','$','%','^','&','*','/','~','?'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];

// Write password to the #password input
function writePassword() {

  //initialize the password questions
  var enter = confirm("Would you like to make a password?")
  
  //if they want to make a password start confirming their preferences
  choices: if(enter){
    alert("Your password must contain at least 8 characters and no more than 128 characters")
    var passnum = Number(prompt("How many characters would you like your password to have? "));

    if (passnum != null && Number.isInteger(passnum)&& passnum >=8 && passnum<=128){
      alert("Great, let's make a password " + passnum + " characters long")
    }
    else if(passnum != null && !Number.isInteger(passnum)){
      do{
        alert("Please enter a valid number between 8 and 128")
        var passnum = Number(prompt("How many characters would you like your password to have? "));
        if (passnum != null && Number.isInteger(passnum)&& passnum >=8 && passnum<=128){
        alert("Great, let's make a password " +passnum + " characters long")
        }
        else if(!passnum){
          alert("I guess you want to exit :( have a nice day")
          break choices;
        }
      }
      while(!Number.isInteger(passnum))
    }
    else if(!passnum){
      alert("You didnt choose a password length :( have a nice day!");
      break choices;
    }
    //initialize the preference array
    var pref = [];
   

    do{
      var prefLowercase = confirm("Would you like to have lowercase characters in your password?")

      if (prefLowercase){
        pref = pref.concat(lowercase);
      }
      var prefUppercase = confirm("Would you like to have uppercase characters in your password?")
      if (prefUppercase){
        pref = pref.concat(uppercase);
      }
      var prefNumeric = confirm("Would you like to have numeric characters in your password?")
      if (prefNumeric){
        pref = pref.concat(numeric);
      }
      var prefSpecial = confirm("Would you like to have special characters in your password?")
      if (prefSpecial){
        pref = pref.concat(special);
      }
      if(!prefNumeric && !prefSpecial && !prefUppercase && !prefLowercase){
        alert("You need some characters ya dummy")
      }
    }
    while(!prefNumeric && !prefSpecial && !prefUppercase && !prefLowercase)

    //password generation
    var password = generatePassword(pref, passnum);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

      function generatePassword(a, b){
        //loop through the whole password array
        var output = [];

          for (var i = 0; i < b; i++){
            //for each position we need to randomly pick a character type and randomly pick a character
            var rand = Math.floor((Math.random() * a.length) + 1);
            output[i] = a[rand];
          }
          
        //return password
        return output.join('');
    }
  }

  //if they don't want to make a password then exit
  else{
    alert("FINE :( have a nice day!")
    break choices;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
