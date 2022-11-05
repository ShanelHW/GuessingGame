let guessBtn = document.getElementById("guessBtn");
let guess = document.getElementById("guess");
let result = document.getElementById("result");
let range= document.getElementById("range")
let userGuess;
let limit;
let randomNum;
let guesses = document.getElementById('guesses');
let guessArray = [];


let setLimit = () =>{
    console.log(document.getElementById('limit').value)
    limit = Math.ceil(Number(document.getElementById('limit').value))
    let isOverOne = (limit >= 1)
    let isNum = (!isNaN(limit))
    if (isOverOne && isNum){
        range.innerText= `Choose a number between 1 and ${Math.ceil(Number(document.getElementById('limit').value))}`
    }else{
        range.innerHTML= 'Choose a valid number.'
    }
    randomNum = Math.ceil(Math.random()*limit);
}



const guessNum = () => {
    //set userGuess based on input
   userGuess =  Number(document.getElementById('guess').value);
   //check for safeNumber
    if(!typeof userGuess == 'Number') {
        result.innerHTML = 'That is not a number!'
    }else if (userGuess > limit || !userGuess > 1) {
        result.innerHTML = 'That number is not in range, try again.'
    } else{
        //add to array
        guessArray.push(userGuess);
        guesses.innerText = guessArray;
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

guessBtn.addEventListener("click", () => {
    
    setLimit()
    console.log(`Limit: ${limit}`)
    console.log(`Random Number: ${randomNum}`)
    guessNum();
    console.log(`Guess: ${userGuess}`)

});
