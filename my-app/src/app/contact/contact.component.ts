import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message:string = "從父元件傳到子元件的資料";
  count:number = 0;
  //c 會接收到子元件傳過來的數字
  saveData(c:number):void{
   this.count = c;
  }
}
