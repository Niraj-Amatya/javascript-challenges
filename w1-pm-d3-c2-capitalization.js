// Capitalisation
// Create a function called capitalise that will take a string as an argument. In this function, use your favourite loop to capitalise the first letter of each word, and make each other letter lowercase.

// E.g. capitalise("sinGLE"), should return “Single”

// E.g. capitalise("TWO words"), should return “Two Words”

// E.g. capitalise("Quite a Long SENTENCE!"), should return “Quite A Long Sentence!”


function capitalise(stringValue) {
  let result = '';
  
  for(let word of stringValue.split(' ')) {
    let capitalizedWord = '';
    for(let i in word) {
      capitalizedWord += (i == 0)? word[i].toUpperCase() : word[i].toLowerCase();
    }
    result += `${capitalizedWord} `;
  }
  
  return result.trim();
}

capitalise("sinGLE");
capitalise("TWO words");
capitalise("Quite a Long SENTENCE!");