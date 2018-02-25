const words = ['Bearcat',
        'Armadillo',
        'Porcupine',
        'Peacock',
        'Alligator',
        'Nightingale',
        'Woodchuck',
        'Woodpecker',
        'Elephant',
        'Antelope',
        'Pronghorn',
        'Penguin',
        'Grasshopper',
        'Hummingbird',
        'Mosquito',
        'armpit',
        'chocolate',
        'brown',
        "beautiful","beauty","became","because","become","becoming",
        "contain","continent","continued","contrast","control","conversation","cook","cookies",
        'forever', "production","program","progress","promised","proper",
        'passport',
        'initiate',
        'migrant',
        'president',
        'hamburger'];


const letters=['A', 'B', 'C', 'D', 'E',
            'F', 'G', 'H', 'I', 'J', 'K',
            'L', 'M', 'N', 'O', 'P', 'Q',
            'R', 'S', 'T', 'U', 'V', 'W',
            'X', 'Y', 'Z'];


function game() {
  randomWord = words[Math.floor(Math.random() * 40)];

  let remainingLetters = this.randomWord.length;


  let randomWordArray = randomWord.split('') 

  let answer = [];
    for (var index= 0; index< randomWord.length; index++) {
        answer[index] = "_";
    };

  while (remainingLetters > 0) {

    console.log("remaining letters:\n" + answer.join(" "));

    var guess = () => {prompt("Give a letter, or type xxx to stop the game.", "");
        if ('xxx'===guess.this) {
            break;
        }
        else if (guess.length !== 1) {
            prompt("Please enter one letter.");
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
   console.log("you won! The right answer is " + randomWord);
   }
 };

game();
