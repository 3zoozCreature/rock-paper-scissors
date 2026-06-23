/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let userChoice = null
/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices')

/*----------------------------- Event Listeners -----------------------------*/
choices.addEventListener('click', function(event) {
    userChoice = event.target.id
    console.log('userChoice is: ', userChoice)
})
/*-------------------------------- Functions --------------------------------*/