// Use some array function(s) to count the even numbers in an array
function countEvens(arr) {
    return arr.filter(item => item % 2 === 0).length;
}

const testNumbers = [1,2,3,4,5,6,7,8];
console.log(countEvens(testNumbers));
// should return 4
