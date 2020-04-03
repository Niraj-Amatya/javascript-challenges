// Common Characters
// Write code which will return the common characters found in two different strings. Only return one copy of each common character. Character case should be ignored (your solution should be case-insensitive).

// Examples:
// commonCharacters("efg", "feg") => "efg"
// commonCharacters("We are both dragon energy", "I am God's vessel") => "eaodg"
// commonCharacters("Alright alright alright", "") => ""

function commonCharacters(string1, string2) {
  // function to return an array of characters after eliminitating duplicates
  let getDeDuplicatedCharArr = string =>
    Array.from(new Set(string && string.toLowerCase().split("")));

  let s2 = getDeDuplicatedCharArr(string2);
  return getDeDuplicatedCharArr(string1)
    .filter(c => c !== " " && s2.includes(c))
    .join("");
}
console.log(commonCharacters("efg", "elephant")); // => "efg"
console.log(commonCharacters("We are both dragon energy", "I am God's vessel")); // => "eaodg"
console.log(commonCharacters("Alright alright alright", "")); //=> ""
