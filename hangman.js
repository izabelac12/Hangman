var words = ["beautiful",
            "kit",
            "attack",
            "hook"
        ];

var word = words[Math.floor(Math.random() * randomWords.length)];

// get the random word and create blanks



// function shud always be created thinking of 3 things..
// 1. Input
// 2. what to do with the Input
// 3. Output - give me back the input with watever I asked u to do with it...

function createBlanksForWords(inputWord) {
  // storing the answer which essentially is the word in form of blanks..
  var blanksForWordList = [];
  // How many times will this loop ?
  for (var i = 0;i < word.length;i++){
    blanksForWordList[i] ="_";
  }
  return blanksForWordList;
}

var remainingLettersBeforeAttempt = word.length;

while (remainingLetters > 0) {
  alert(answerArray.join(" "));

}

var guess  = prompt("Guess a letter or click cancle to stop playing");
if (guess.length !== 1){
  alert("Please enter one letter at a time")
}else{
  for (var a = 0; a < word.length; a++) {
    if (word[a] === guess) {
    answerArray[a] = guess;
    remainingLetters--;
}
}
}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
