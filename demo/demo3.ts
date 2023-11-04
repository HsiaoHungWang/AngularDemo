import { log } from './log';

@log
class doSomething{}

let doSome: doSomething =  new doSomething();

console.log(doSome.savingTime);
