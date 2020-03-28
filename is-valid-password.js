function isValidPassword(password) {
  if(password.length < 8) {
    return 'Valid passwords are at least 8 characters';
  }
  if(!password.match(/[A-Z]/)) {
     return 'Valid passwords contain at least one capital letter';
  }
  if(!password.match(/[0-9]/)) {
     return 'Valid passwords contain at least 1 numbe';
  }
  return 'Password accepted!';
}

console.log(isValidPassword(''));
console.log(isValidPassword('abcljasdlfj'));
console.log(isValidPassword('sjdklfjasF'));
console.log(isValidPassword('sjdklfjasF9'));
