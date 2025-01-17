const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterPool = ( "A" * 9 + "B" * 2 + "C" * 2 + "D" * 4 + "E" * 12 + "F" * 2 + "G" * 3 +
     "H" * 2 + "I" * 9 + "J" + "K" + "L" * 4 + "M" * 2 + "N" * 6 + "O" * 8 + "P" * 2 +
      "Q" + "R" * 6 + "S" * 4 + "T" * 6 + "U" * 4 + "V" * 2 + "W" * 2 + "X" +
       "Y" * 2 + "Z").toUpperCase().split('');

    shuffle(letterPool)

    const letterHand = letterPool.slice(0,10);

    return letterHand
  },

 usesAvailableLetters(input, lettersInHand) {

  for (let i = 0; i < input.length; i += 1) {
    if ( lettersInHand.includes(input[i]) === false ) {
      return false;
    }
    else {
      lettersInHand.splice(lettersInHand.indexOf(input[i]), 1 )
    }
  }

  return true;
  },

  scoreWord(word) {
    let points = 0;
    const upcaseWord = word.toUpperCase()

    if (word.length >= 7 ) { points += 8; }
   
    for (let i = 0; i < word.length; i += 1) 
    {
      if ('AEIOULNRST'.includes(upcaseWord[i])) { points += 1; }
      else if ('DG'.includes(upcaseWord[i])) { points += 2; }
      else if ('BCMP'.includes(upcaseWord[i])) { points += 3; }
      else if ('FHVWY'.includes(upcaseWord[i])) { points += 4; }
      else if ('K'.includes(upcaseWord[i])) { points += 5; }
      else if ('JX'.includes(upcaseWord[i])) { points += 8; }
      else { points += 0; }
    }

    return points;
  },

  highestScoreFrom(words)  {

    let max = 0
    let scores = [];
    let lengths = [];
    let maxIndices = [];
    let indexWinner;
    let winner;

    for ( let i = 0; i < words.length; i += 1 ) {
      let score = Adagrams.scoreWord(words[i]);
      scores.push(score);
      if ( max < score ) { max = score; } 
    }

    for ( let i = 0; i < scores.length; i += 1 ) {
      if ( max === scores[i] ) { maxIndices.push(i); let length = words[i].length; lengths.push(length); }
    }

    let minLength = lengths[0];

    for ( let i = 0; i < lengths.length; i += 1 ) {
      if ( minLength > lengths[i] ) { minLength = lengths[i]; }
    }
    
    if (lengths.includes(10) === true) { indexWinner = lengths.indexOf(10); winner =  maxIndices[indexWinner]; }
    else { indexWinner = lengths.indexOf(minLength); winner = maxIndices[indexWinner]; }
    
    const correct = { word: words[winner], score: max };
    return correct;
  },
};

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;