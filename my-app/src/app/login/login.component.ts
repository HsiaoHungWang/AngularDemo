import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: IUser = {"email":"guest@company.com","password":"1234", "rememberMe":true}
  // onSubmit(myForm:any){
  //   console.log(myForm.value);
  // }
  onSubmit(){
    console.log(this.model);
  }
}

interface IUser {
  email: string,
  password: string,
  rememberMe:boolean
}
