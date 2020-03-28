// Use an appropriate array iterator method to do the following challenges:

// 1. Add 1

// Write a function called addOne that takes an array of numbers and returns an array with each number incremented by 1.

// E.g. addOne([1,2,3]), should return [2,3,4]

function addOne(inputArray) {
  return inputArray.map(item => item + 1);
}

console.log(addOne([1,2,3]));