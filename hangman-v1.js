const words = require('./hangman-array.js');

const letter = require('./hangman-array.js')

randomWord = words[Math.floor(Math.random() * 23)];

var remainingLetters = randomWord.length;
//console.log(randomWord);    // returns a words

let randomWordArray = randomWord.split('') 

let answer = [];
    for (var index= 0; index< randomWord.length; i++) {
        answer[i] = "_";
    };
while (remainingLetters > 0) {

  console.log("remaining letters:\n" + answer.join(" "));

  var guess = console.log("Give a letter, or type xxx to stop the game.");
        if ('xxx') {
            break;
        }
        else if (guess.length !== 1) {
            console.log("Please enter one letter.");
        }
        else {
            for (var j = 0; j < randomWord.length; j++) {
                if (word[j] === guess) {
                    answer[j] = guess;
                    remainingLetters--;
                }
            }
        }
    };
console.log(answer.join(" "));
console.log("you won! The right answer is " + word);
