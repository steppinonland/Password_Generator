function getRand(arr) {
	var randInd = Math.floor(Math.random() * arr.length);
	var randEl = arr[randInd];
	return randEl;
}
// first step: click button > confirm box 1 > confirm box ; ELSE close window



var endArray = [];
let finalWord = [];
//  naming all the arrays and variables:
/*
            const lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            const specialArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "^", "`", "{", "|", "}", "~"];
            *

/*
function goGenerate() {
    document.getElementById.innerHTML = alert("Do you want a new password?");
        confirm("Do you want it to contain uppercase letters?");
}
*/

function generatePassword () {
    const upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var goGenerate = confirm("Do you want to generate a password?");
    var allowUpperArray = confirm("Do you want it to contain uppercase letters?");
    /*
    var allowLowerArray = confirm("Do you want it to contain lowercase letters?");
    var allowNumAarray = confirm("Do you want it to include numbers?");
    var allowSpecialArray = confirm("Do you want it to include special characters?");*/
    var wordLength = prompt("How long would you like the password to be? Enter in a number between 8 and 120.")

    if (allowUpperArray) {
        upperArray.forEach((letter) => {
            endArray.push(letter);
        })
    }





/*
if (allowLowerArray){
    let endArray = lowerArray.map((element) => {
        return lowerArray;
        endArray.push(lowerArray);
        }
    }

if (allowNumArray){
    let endArray = numArray.map((element) => {
        return numArray;
        endArray.push(numArray);
    }
}

if (allowSpecialArray){
    let endArray = specialArray.map((element) => {
        return specialArray;
        endArray.push(specialArray);

    }
}*/
// the entry for word length must be between 8 and 120 characters
    if (wordLength < 8 || wordLength > 120);
        alert("Pick a different number. Must be between 8 and 120.")
    }
    for (var i = 0 ; i <= wordLength; i++) {
        var finalLength = getRand(endArray);
        finalWord.push(finalLength);
     }
    
     console.log(generatePassword);

     document.getElementById("finalWord").value=finalWord;
// randomizing code block

// the final password will be generated from a new array, based on the chosen criteria