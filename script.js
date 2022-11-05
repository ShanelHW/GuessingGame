let guessBtn = document.getElementById("guessBtn");
let guess = document.getElementById("guess");
let result = document.getElementById("result");
let instructions= document.getElementById("instructions")
let userGuess;
let max;
let randomNum;
let guesses = document.getElementById('guesses');
let guessArray = [];
let limitSet = false;

//set a maximum number
let setLimit = () =>{
    console.log('max:');
    console.log(document.getElementById('max').value)
    max = Math.ceil(Number(document.getElementById('max').value))
    let isOverOne = (max >= 1)
    let isNum = (!isNaN(max))
    if (isOverOne && isNum){
        console.log('valid num')
        instructions.innerHTML= `Choose a number between 1 and ${Math.ceil(Number(document.getElementById('max').value))}`
    }else{
        instructions.innerHTML= 'Choose a valid number.'
    }
    randomNum = Math.ceil(Math.random()*max);
    console.log(randomNum)
    limitSet=true;
}


//guess a number
const guessNum = () => {
    //set userGuess based on input
   userGuess =  Number(document.getElementById('guess').value);
   //check for safeNumber
    if(!typeof userGuess == 'Number') {
        result.innerHTML = 'That is not a number!'
    }else if (userGuess > max || userGuess < 1) {
        result.innerHTML = 'That number is not in range, try again.'
    } else{
        //add to array
        if(!guessArray.includes(userGuess)){
        guessArray.push(userGuess);
        console.log(guessArray)
        guesses.innerHTML = guessArray;
//Once safe compare userGuess with randomNum
    if(userGuess == randomNum){
        result.innerHTML= 'You got it!'
    }
    else if (userGuess < randomNum) {
        result.innerHTML= 'No, try a higher number'
    } else if(userGuess > randomNum) {
        result.innerHTML= 'No, try a lower number'
    }

}    
}
    
}

guessBtn.addEventListener("click", () => {
    setLimit()
    console.log(`Maximum: ${max}`)
    guessNum();
    console.log(`Guess: ${userGuess}`)

});
