import { Component } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  title: string = "公司目標...";
  message:string = "";
  getName(): string {
    return "guest";
  }
  isLogin: boolean = false;
  price: number = 1000;
  week: string[] = ["二", "三"];
  // person:IUser = {
  //   name: "Jack",
  //   age: 30
  // }
  //person:IUser | null = null;
  person: IUser[] = [
    { name: "Jack", age: 30 },
    { name: "Mary", age: 32 }
  ]

  logo:string = "Angular_full_color_logo.svg.png";
  isValid:boolean = false;
  sayHi(name:string){
   alert("hi " + name);
  }
  getValue(event:Event){
   this.message = (event.target as HTMLInputElement).value;
  }
}

interface IUser {
  name: string,
  age?: number
}
