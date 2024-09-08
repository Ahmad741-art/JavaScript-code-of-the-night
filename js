const correctNumber = Math.floor(Math.random()*100)+1;
console.log(correctNumber)

const formEl = document.querySelector('form');

formEl.addeventListener('submit', )

function getUserGuess(Event){
     Event.preventDefault();

     const userAnswer = document.quarySelector('input').value;

     console.log(userAnswer);
     formEl.reset();

     let numberOfGuesses = 0;
     numberOfGuesses++;
     console.log('number of guesses', numberOfGuesses)

     if(correctNumber == userAnswer){
        resultEl.innerText 
     }

     if(correctNumber == userAnswer){
        console.log('Right')
     }

     else if(userAnswer < correctNumber){
        console.log('Wrong, too little')
     }

     else if(userAnswer > correctNumber){
        console.log('Wrong, too much')
     }
}
