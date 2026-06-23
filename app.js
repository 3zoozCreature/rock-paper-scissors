/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let userChoice = null
/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const reset = document.querySelector('#reset')
/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function (event) {
    userChoice = event.target.id

    //to hide buttons that were no the choice
    if (userChoice === 'rock') {
        //add hidden class to paper and scissors
        paper.classList.add('hidden')
        scissors.classList.add('hidden')
        console.log('user chose rock')
    } if (userChoice === 'paper') {
        rock.classList.add('hidden')
        scissors.classList.add('hidden')
    } if (userChoice === 'scissors') {
        rock.classList.add('hidden')
        paper.classList.add('hidden')
    }
    console.log('userChoice is: ', userChoice)
})

reset.addEventListener('click', function () {
    rock.classList.remove('hidden')
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')
})
/*-------------------------------- Functions --------------------------------*/