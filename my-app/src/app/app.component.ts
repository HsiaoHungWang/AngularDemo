import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first app';
  constructor(private dataService: DataService){
    //console.log('constructor');
  }
  // ngOnChanges(){
  //   console.log('ngOnChanges');
  // }
  ngOnInit(){
    //準備Angular要用的資料
    //ex 去呼叫service，透過Service去後端要資料
    //console.log('ngOnInit');
    console.log(this.dataService.message);
  }
}


