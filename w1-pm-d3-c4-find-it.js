function findIt(stingArray, searchString) {
  return stingArray.filter(stringItem => stringItem.includes(searchString));
}

console.log(findIt(["one", "two", "bone"], "on"))