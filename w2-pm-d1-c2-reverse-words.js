// Use the map function to reverse each word in the sentence
// (not the sentence itself)
function reverseWords(sentence) {
  let reverseWord = function(word) {
    return word.match(/./g).map((c,i,w) => w[w.length-1-i]).join('');
  }
  return sentence.split(' ').map(reverseWord).join(' ');
}
const testSentence = "Can you read backwards? It is challenging.";
console.log(reverseWords(testSentence));
// should return "naC uoy daer ?sdrawkcab tI si .gnignellahc"

// "Can you read backwards? It is challenging.".match(/./g);