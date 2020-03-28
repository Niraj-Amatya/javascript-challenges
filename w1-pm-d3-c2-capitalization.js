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