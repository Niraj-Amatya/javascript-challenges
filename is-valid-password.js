function isValidPassword(password) {
  let validations = [
    {
      name: 'length test',
      condition: /.{8,}/,
      msg: 'Valid passwords are at least 8 characters'
    },
    {
      name: 'Capital letter existence test',
      condition: /[A-Z]/,
      msg: 'Valid passwords contain at least one capital letter'
    },
    {
      name: 'Numeric existence test',
      condition: /\d/,
      msg: 'Valid passwords contain at least 1 number'
    }
  ];
  
  let validationResult = validations.filter(
                                        validation => !validation.condition.test(password) )
                                    .map(validation => validation.msg);
  
  return validationResult.length && validationResult || 'Password accepted!';
}

isValidPassword('');
isValidPassword('test1234');
isValidPassword('Testottf');
isValidPassword('Test1234');
