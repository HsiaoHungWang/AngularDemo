import { Component } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  title: string = "公司目標...";
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
}

interface IUser {
  name: string,
  age?: number
}
