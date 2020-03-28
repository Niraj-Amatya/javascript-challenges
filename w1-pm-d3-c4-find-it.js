// 2. Search

// Write a function called search that takes two arguments:

// an array of strings
// a string
// The function should return the values in the array that contain the string argument.

// E.g. findIt(["one", "two", "bone"], "on"), should return ["one", "bone"]

function findIt(stingArray, searchString) {
  return stingArray.filter(stringItem => stringItem.includes(searchString));
}

console.log(findIt(["one", "two", "bone"], "on"))