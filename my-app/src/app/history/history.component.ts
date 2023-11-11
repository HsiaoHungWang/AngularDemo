import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  isBorder:boolean=true;
  isBold:boolean = false;
  isUnderline:boolean = false;
  isItalic:boolean=false;
  size:number = 16;
  color:string = 'black';

  large(){
    this.size += 2;
  }
  small(){
    this.size -= 2;
  }
}
