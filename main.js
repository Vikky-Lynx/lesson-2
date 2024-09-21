
document.addEventListener("DOMContentLoaded", function() {

let userChoice;
let computerChoice;
let isWinner = false;
let countWin = 3;
let countUserWin = 0
let countComputerWin = 0

const keyWords = ["stone", "scissors", "paper"]

while (countUserWin < countWin && countComputerWin < countWin) {
while (isWinner === false) {
userChoice = prompt(`Write "${keyWords[0]}", "${keyWords[1]}" or "${keyWords[2]}" `)
userChoice = userChoice.toLowerCase()
if (userChoice === keyWords[0] || userChoice === keyWords[1] || userChoice === keyWords[2]) {
    
    const randomNumber = Math.floor(Math.random() * 3)
    computerChoice = keyWords[randomNumber]
    alert(`The computer chose "${computerChoice}"`)

    if (userChoice === computerChoice) {
        alert("No winners, let's try again!")
    } else if (
        (userChoice === keyWords[0] && computerChoice === keyWords[2]) ||
        (userChoice === keyWords[1] && computerChoice === keyWords[0]) ||
        (userChoice === keyWords[2] && computerChoice === keyWords[1])
    ) {
        alert("Computer is the Winner!!!")
        isWinner = true
        countComputerWin++;
    } else {
        alert("You are the Winner!!!")
        countUserWin++;
        isWinner = true
    } 
    
    } else {
        alert("Please enter a valid value")
    }
}
    isWinner = false
    console.log(`Current Account ${countUserWin}:${countComputerWin}`);
}
alert(`The game ended with a score of ${countUserWin}:${countComputerWin}`);
})
