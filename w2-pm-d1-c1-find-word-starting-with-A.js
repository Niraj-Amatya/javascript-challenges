// Use the filter function to find all elements in an array
// that begin with the letter a. Ignore case.
function startsWithA(arr) {
    return arr.filter((word) => word[0].match(/a/i));
}

const testArray = ["apple", "star", "Angel", "elephant", "asterisk"];
console.log(startsWithA(testArray));
// should return ["apple", "Angel", "asterisk"]

