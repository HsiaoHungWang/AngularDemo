"use strict";
// class User{
//     firstName:string;
//     lastName:string;
//     private age:number
class User {
    firstName;
    lastName;
    age;
    constructor(fn, ln, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
