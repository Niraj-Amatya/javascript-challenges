// Vowels
// Vowels

// Write a method that will take a string and
// return an array of vowels used in that string.

// Example:
// vowels("The quick brown fox") should return ["e","u","i","o","o"]
// vowels("Hello WOrld") should return ["e","o","O"]

function vowels(string) {
  // when input is string use regex global case insensitive search to get all vowels
  // otherwise return empty array
  return (typeof string === "string" && string.match(/[a,e,i,o,u]/gi)) || [];
}
console.log(vowels("The quick brown fox"));
console.log(vowels("Hello WOrld"));
