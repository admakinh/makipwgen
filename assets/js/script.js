// Assignment Code
var generateBtn = document.querySelector("#generate");
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specChar = ["\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028", "\u0029", "\u002A", "\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F", "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"];

// Write password to the #password input

function writePassword() {
  // sets array for pw generation
  const pwOptions = [];
  // user selects length
  var pwLength = window.prompt("Enter the desired password length (8-128)");
  // verify length
  if (pwLength > 7 && pwLength < 129) {
    window.alert("Neat-O!\nClick OK for Yes and Cancel for No");
    // determines password paramenters
    var confUp = window.confirm("SHOULD WE INCLUDE UPPERCASE CHARACTERS?");
    var confLow = window.confirm("how about lowercase?");
    var confNumb = window.confirm("1NT3Rested 1n s0me Numb3rs?");
    var confSpec = window.confirm("Spice things up with s*me special characters?");
    var confWing = window.confirm("Finally, how about some wing-dings?");
    if (confWing) {
      var wingPass = window.confirm("On second thought, maybe no wing dings...\nLet's generate that password!");
    } else {
      var goPass = window.confirm("Thanks, let's generate that password!");
    }
  } else if (pwLength < 7 || pwLength > 129) {
    window.alert("Please enter a value between 8 and 128");
    writePassword()

  } else {
    window.alert("Try again when you're ready")
    // location.reload();
  }
// creates pwOptions array
if (confUp) {
  pwOptions.push(...uppercase);
}
if (confLow) {
  pwOptions.push(...lowercase);
}
if (confNumb) {
  pwOptions.push(...numbers);
}
if (confSpec) {
  pwOptions.push(...specChar);
}
// generates random string from pwOptions array
if (goPass) {
  document.body.style.fontFamily = "sans-serif";
  document.querySelector("#generate").style.fontFamily = "sans-serif";
  generateString()
  function generateString(length) {
    var pwResult = ' ';

    for (let i = 0; i < pwLength; i++) {
      var randomNum = Math.floor(Math.random() * pwOptions.length);
      pwResult += pwOptions[randomNum];
    }
    document.querySelector("#password").textContent = pwResult;
  }
  } else if (wingPass) {
    // wing dings...
    document.body.style.fontFamily = "wingdings";
    document.querySelector("#generate").style.fontFamily = "wingdings";
  generateString()
  function generateString(length) {
    var pwResult = ' ';

    for (let i = 0; i < pwLength; i++) {
      var randomNum = Math.floor(Math.random() * pwOptions.length);
      pwResult += pwOptions[randomNum];
    }
    document.querySelector("#password").textContent = pwResult;
  }
  } else {
  location.reload();
  }
}




// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



