function largestNumber(numbers) {
  return numbers.reduce((num1, num2) => num1 > num2? num1 : num2, Number.MIN_SAFE_INTEGER)
}

console.log(largestNumber([-15, 1, 20, 3]));