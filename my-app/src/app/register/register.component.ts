import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userName = new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(12)]);

  send(){
    if(this.userName.valid){
      console.log(this.userName.value)
    }else{
      console.log(this.userName.errors);
    }
   
  }
}
