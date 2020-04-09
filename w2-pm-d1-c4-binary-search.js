function binarySearch(binaryArray, searchValue) {
  let start = 0, 
      end = binaryArray.length-1, 
      stepCount = 0,
      midPoint;
  do {
    stepCount++;
    start = typeof midPoint === 'undefined' ? 0 : searchValue > binaryArray[midPoint] ? midPoint + 1 : start;
    end = typeof midPoint === 'undefined' ? binaryArray.length-1 : searchValue < binaryArray[midPoint] ?  midPoint - 1 : end;
    midPoint = start + Math.floor((end-start+1)/2);
  } while(start !== end && binaryArray[midPoint] !== searchValue);
  
  return [binaryArray[midPoint] === searchValue && midPoint, stepCount];
}

// // value is the midpoint
console.log(binarySearch([1, 3, 7, 10, 14, 19, 31], 10)); // [3,1]
// the only value
console.log(binarySearch([1], 1)); // [0,1]
// // at the beginning
// binaryArray = [1, 3, 7, 10, 14, 19, 31];
// searchValue = 1
console.log(binarySearch([1, 3, 7, 10, 14, 19, 31], 1)); // [0,3]
// // at the end
// searchValue = 31
console.log(binarySearch([1, 3, 7, 10, 14, 19, 31], 31)); // [6,3]

console.log(binarySearch([1, 3, 7, 10, 14, 19, 31],65)); // not found
