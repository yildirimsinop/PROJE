let randomNumber = Math.floor(Math.random() * 100) +1;
let minGuess = 1;
let maxGuess = 100;

document.getElementById("userInput").focus();

function guess () {
    let userGuess = document.getElementById("userInput").value;
    console.log(userGuess);

    if (userGuess == randomNumber) {
        document.getElementById("message").textContent = "Congratulations! You found the number: " + randomNumber;

    } else if (userGuess < randomNumber) {
        minGuess = Math.max (minGuess, userGuess);
        document.getElementById("message").textContent = "Enter a number between " + minGuess + " and " + maxGuess; 

    } else if (userGuess > randomNumber) {
        maxGuess = Math.min(maxGuess, userGuess);
        document.getElementById("message").textContent = "Enter a number between " + minGuess + " and " + maxGuess; 
    }

    document.getElementById("userInput").value = "";


}