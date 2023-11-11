import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input()
abc:string = "";

@Output()
xyz = new EventEmitter<number>();

//宣告父元件傳進來的屬性名稱
@Input() title:string = "";  
//事件名稱的規則為[屬性名稱+Change]
@Output() titleChange =  new EventEmitter<string>();

n:number = 10

// ngOnInit(){
//   this.xyz.emit(this.n);
// }

add(){
  this.n++;
  this.xyz.emit(this.n);

}

changeTitle(){
this.titleChange.emit(this.title);
}

}
