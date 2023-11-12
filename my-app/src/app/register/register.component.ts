import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
      userName : new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      userEmail : new FormControl('',[Validators.required, Validators.email]),
      userPhone : new FormControl('',[Validators.required, Validators.pattern(/^09\d{2}-\d{3}-\d{3}$/)])
  });

  get f(){
    return this.registerForm.controls;
  }

  // send(){    
  //   if(this.userName.valid){
  //     console.log(this.userName.value)
  //   }else{
  //     console.log(this.userName.errors);
  //   }   
  // }

  submit(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
    }
  }
}
