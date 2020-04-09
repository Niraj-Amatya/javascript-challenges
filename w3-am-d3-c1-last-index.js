// Last Index

// Complete the function findLastIndex which takes an array and an object  - the parameter is called needle, like in a haystack - 
// returning the index closest to the end where the predicate truth test passes. Note that needle is an object.

// What if the object is not found in the array at all? In that case return -1, like built-in array methods that return -1 when an index isn't found.

// Example:

// const users = [
//     {'id': 1, 'name': 'Bob', 'last': 'Brown'},
//     {'id': 2, 'name': 'Ted', 'last': 'White'},
//     {'id': 3, 'name': 'Matthew', 'last': 'McConaughey'},
//     {'id': 4, 'name': 'Kanye', 'last': 'West'}
// ];

// findLastIndex(users, {
//   name: 'Kanye'
// });
// => 3

const users = [
  { id: 1, name: "Bob", last: "Brown" },
  { id: 2, name: "Ted", last: "White" },
  { id: 3, name: "Matthew", last: "McConaughey" },
  { id: 4, name: "Kanye", last: "West" },
  { id: 5, name: "Kanye", last: "West" }
];

// checks if all of the values in needle object matches with the stack object
const isNeedleInStack = function(stack, needle) {
  // check if needle and stack are not null or undefined
  if (needle != null && stack != null) {
    let needleKeys = Object.keys(needle);  
    // verify if value paired with each key in needle object matches with the corresponding value in stack object
    let result = needleKeys.every((key) => needle[key] == stack[key]);
    return result;
  }
  return false;
};

const findLastIndex = (array, needle) => {
  // assume there won't be a match
	let index = -1;
  // try to search only if array is actually an array and needle is an object
  if(Array.isArray(array) && typeof needle === 'object') {
    // start search from last element
    for(index = array.length-1; index > -1; index--) {
      // stop searching if needle is in the element at current index value
      if(isNeedleInStack(array[index], needle)) {
        break;
      }
    }
  }
  return index;
}
