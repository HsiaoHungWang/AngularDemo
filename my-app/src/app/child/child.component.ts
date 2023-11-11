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

n:number = 10

// ngOnInit(){
//   this.xyz.emit(this.n);
// }

add(){
  this.n++;
  this.xyz.emit(this.n);

}

}
