function generatePassword () {
    const upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const specialArray = ["#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["];

    var allowUpperArray = confirm("Do you want it to contain uppercase letters?");

    var allowLowerArray = confirm("Do you want it to contain lowercase letters?");

    var allowNumArray = confirm("Do you want it to include numbers?");

    var allowSpecialArray = confirm("Do you want it to include special characters?");

    var endArray = [];

    var wordLength = (parseInt(prompt("How long would you like the password to be? Enter in a number between 8 and 120.")) - 1);
    if (wordLength <= 8 || wordLength >= 120)
    {
        alert("Try a different number. Must enter a number between 8 and 120.");
        return wordLength = (parseInt(prompt("How long would you like the password to be? Enter in a number between 8 and 120.")) - 1);
    }
    if (allowUpperArray) {
        upperArray.forEach((letter) => {
            endArray.push(letter);
        })
    }
    if (allowLowerArray) {
        lowerArray.forEach((letter) => {
            endArray.push(letter);
        })
    }
    if (allowNumArray) {
        numArray.forEach((number) => {
            endArray.push(number);
        })
    }
    if (allowSpecialArray) {
        specialArray.forEach((character) => {
            endArray.push(character);
        })
    }

    let finalWord = "";



    for (var i = 0 ; i <= wordLength; i++) {
        var randomIndex = (Math.floor((Math.random() * endArray.length)));
        finalWord = finalWord + endArray[randomIndex];
    }
    console.log(randomIndex);

    document.getElementById("passwordDisplay").value=finalWord;
}