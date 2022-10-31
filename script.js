let guessBtn = document.getElementById("guessBtn");
let guess = document.getElementById("guess");
let result = document.getElementById("result");

let randomNum = Math.ceil(Math.random()*20);
   console.log('A random number was generated.')

const guessNum = () => {
    let userGuess = Number(document.getElementById('guess').value);
   
    if(userGuess == randomNum){
        result.innerHTML= 'You got it!'
    }
    else if (userGuess < randomNum) {
        result.innerHTML= 'No, try a higher number'
    } else {
        result.innerHTML= 'No, try a lower number'
    }
    console.log(`Guess: ${userGuess}`);
    console.log(randomNum);
    console.log(guess == randomNum)
}

guessBtn.addEventListener("click", () => {
    guessNum();
});
