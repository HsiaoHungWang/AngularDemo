import {student} from './student';
// class User{
//     firstName:string;
//     lastName:string;
//     private age:number

//     constructor(fn:string, ln:string, age:number){
//         this.firstName = fn;
//         this.lastName = ln;
//         this.age = age;
//     }

//     fullName():string{
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// // let userA:User = new User();
// // userA.firstName = "Tom";
// // userA.lastName = "Lee";

// let userA:User = new User("Jack", "Wu", 30);
// console.log(userA.fullName());


// class Employee extends User{   
//     id:number;
//     protected salary:number;

//     constructor(fn:string, ln:string, age:number, id:number, salary:number){
//        super(fn, ln, age);
//         this.id = id;
//         this.salary = salary
//     }
  
//     sayHi():string{
//         return `Hello, My Name is ${super.fullName()}. 員編是 ${this.id}, 年紀是 ${this.age}}`;
//     }
 
// }

// let empA: Employee = new Employee("Fiona","Chen",32,990011,40000);
// console.log(empA.sayHi());
// //console.log(empA.salary);

interface IUser{
    firstName:string;
    lastName:string;
    age:number;
    fullName():string;
}


@student({course:"Angular"})
class User implements IUser{
    firstName:string;
    lastName:string;
    age:number;

    constructor(fn:string, ln:string, age:number){
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }

    fullName():string{
        return `${this.firstName} ${this.lastName}`
    }
}

let userA:User = new User("Jack", "Wu", 29);
console.log(userA.course());


