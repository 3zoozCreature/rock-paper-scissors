/*-------------------------------- Constants --------------------------------*/
const choicesArr = ['rock', 'paper', 'scissors']
/*-------------------------------- Variables --------------------------------*/
let userChoice = null
let computerChoice = null

/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const reset = document.querySelector('#reset')
/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function (event) {
    userChoice = event.target.id
let randomIndex = Math.floor(Math.random() * choicesArr.length)
    //to hide buttons that were no the choice
    if (userChoice === 'rock') {
        //add hidden class to paper and scissors
        paper.classList.add('hidden')
        scissors.classList.add('hidden')
        console.log('user chose rock')
    } if (userChoice === 'paper') {
        rock.classList.add('hidden')
        scissors.classList.add('hidden')
        console.log('user chose paper')
    } if (userChoice === 'scissors') {
        rock.classList.add('hidden')
        paper.classList.add('hidden')
        console.log('user chose scissors')
    }

    //computer makes a choice
    computerChoice = choicesArr[randomIndex]
    console.log('computerChoice is: ', computerChoice)
})

reset.addEventListener('click', function () {
    rock.classList.remove('hidden')
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')
})
/*-------------------------------- Functions --------------------------------*/