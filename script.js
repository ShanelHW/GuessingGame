let guessBtn = document.getElementById("guessBtn");
let guess = document.getElementById("guess");
let result = document.getElementById("result");
let instructions = document.getElementById("instructions");
let instructions2 = document.getElementById("instructions2");
let userGuess;
let max;
let randomNum;
let guesses = document.getElementById("guesses");
let guessArray = [];
let randomSet = false;

//set a maximum number
let setMax = () => {
 if (!randomSet) {
	 max = parseInt(document.getElementById("maxField").value);
	  // console.log(`Max: ${max}`);
	
	  let isOverOne = max >= 1;
	  let isNum = !isNaN(max);
	  if (isOverOne && isNum) {
	    console.log("Received a valid num");
	    instructions.innerHTML = `Choose a number between 1 and ${max}`;
	  } else {
	    instructions.innerHTML = "Choose a valid number.";
	  }
} else {
	
}
};
getRandom = () => {
  if (!randomSet) {
    randomNum = Math.ceil(Math.random() * max);
    console.log(`Random Number is ${randomNum}`);
    randomSet = true;
  }
};

//guess a number
const guessNum = () => {
  //reset instruction field 2
  instructions2.innerHTML = "";
  result.innerHTML = ''
  //set userGuess based on input
  userGuess = Math.ceil(Number(document.getElementById("guessField").value));
  //check for safeNumber
  let inRange = userGuess >=1 && userGuess <= max
  if (!typeof userGuess == "Number") {
    result.innerHTML = "That is not a number!";
  } else if (!inRange) {
    instructions2.innerHTML = "That number is not in range, try again.";
  } 
  else {
    //add to array if not in array and not a fraction
    !guessArray.includes(userGuess)
      ? guessArray.push(userGuess)
      : instructions2.innerHTML = 'You already guessed this number';
  }
  guesses.innerHTML = guessArray;
};
//Once safe compare userGuess with randomNum

const compareGuesses = () => {
        if (userGuess == randomNum) {
        result.innerHTML = `You got it! It only took ${guessArray.length} tries`;
      } else if (userGuess < randomNum) {
        result.innerHTML = "No, try a higher number";
      } else if (userGuess > randomNum) {
        result.innerHTML = "No, try a lower number";
      }
}


guessBtn.addEventListener("click", () => {
  setMax();
  console.log(`Maximum: ${max}`);
  getRandom();
  guessNum();
  console.log(`Guess: ${userGuess}`);
  compareGuesses();
});
