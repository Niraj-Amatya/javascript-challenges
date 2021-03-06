// Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once.

// Given a string, detect whether or not it is a pangram and return true if it is, false if not.

// If the given string has any numbers, it should return false

// The solution should be case-insensitive.
function isPangram(string) {
  // return false when string contains any of the digits
  if (string.match(/\d/)) {
    return false;
  }
  // use a string to match all the character from a to z
  let aToZ = "abcdefghijklmnopqrstuvwxyz";
  string
    .toLowerCase()
    .split("") // build an array of characters from input string
    // analyse each character from input string
    .forEach(c => {
      aToZ = aToZ.replace(c, ""); // remove the character from atoZ
    });
  // return true if all the characters from aToZ are removed
  return !aToZ.length;
}
console.log(isPangram("the quick brown fox jumps over the lazy dog"));
console.log(isPangram("the five boxing kanye west wizards jump quickly"));
console.log(isPangram("take the dog for a walk"));
console.log(isPangram("alright alright alright"));
console.log(isPangram("abcdefghijk1mn0pqrstuvwxyz"));
console.log(isPangram("1, 2, 3, 4"));
console.log(isPangram("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
