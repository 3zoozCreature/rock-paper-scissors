/*-------------------------------- Constants --------------------------------*/
const choicesArr = ['rock', 'paper', 'scissors']
/*-------------------------------- Variables --------------------------------*/
let userChoice = ''
let computerChoice = ''
let winner = ''
/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const reset = document.querySelector('#reset')
const resultDisplay = document.querySelector('#result-display')
/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function (event) {
    userChoice = event.target.id
let randomIndex = Math.floor(Math.random() * choicesArr.length)
    //to hide buttons that were no the choice
    if (userChoice === 'rock') {
        //add disabled attribute to paper and scissors
        paper.setAttribute('disabled', 'disabled')
        scissors.setAttribute('disabled', 'disabled')
        console.log('user chose rock')
    } if (userChoice === 'paper') {
        rock.setAttribute('disabled', 'disabled')
        scissors.setAttribute('disabled', 'disabled')
        console.log('user chose paper')
    } if (userChoice === 'scissors') {
        rock.setAttribute('disabled', 'disabled')
        paper.setAttribute('disabled', 'disabled')
        console.log('user chose scissors')
    }

    //computer makes a choice
    computerChoice = choicesArr[randomIndex]
    
    //decide winner
    //if user chooses rock && computer chooses rock = tie
    //if user chooses paper && computer chooses paper = tie
    //if user chooses scissors && computer chooses scissors = tie
    //if user === computer = tie

     //if user === rock && computer === scissors = user wins
     //if user === paper && computer === rock = user wins
     //if user === scissors && computer === paper = user wins

     // anything else = computer wins

     if (userChoice === computerChoice) {
            resultDisplay.textContent = `computer chose: ${computerChoice}. You chose ${userChoice}. It's a tie`
     } if (userChoice === 'rock' && computerChoice === 'scissors') {
        resultDisplay.textContent = `computer chose: ${computerChoice}. You chose ${userChoice}. Winner is user`
     } if (userChoice === 'paper' && computerChoice === 'rock') {
        resultDisplay.textContent = `computer chose: ${computerChoice}. You chose ${userChoice}. Winner is user`
     } if (userChoice === 'scissors' && computerChoice === 'paper') {
        resultDisplay.textContent = `computer chose: ${computerChoice}. You chose ${userChoice}. Winner is user`
     } else {
                resultDisplay.textContent = `computer chose: ${computerChoice}. You chose ${userChoice}. Winner is Computer`
     }
})

reset.addEventListener('click', function () {
    rock.removeAttribute('disabled')
    paper.removeAttribute('disabled')
    scissors.removeAttribute('disabled')
    resultDisplay.textContent = 'Results go here'
})
/*-------------------------------- Functions --------------------------------*/