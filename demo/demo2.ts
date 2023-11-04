import numberRegexp,{ ZipCodeValidator } from './ZipCodeValidator';

let myValidator = new ZipCodeValidator();
console.log(myValidator.isAcceptable("abcd")); //false
console.log(myValidator.isAcceptable("123")); //false
console.log(myValidator.isAcceptable("12345")); //true
console.log(numberRegexp.test("xyz")); //false


