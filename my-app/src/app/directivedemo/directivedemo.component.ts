import { Component } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent {
  show:boolean = true;
  selectedCode:string = "TPE";
  cities:any = [
    {"cityCode":"KLU", "cityName":"基隆市"},
    {"cityCode":"TPH", "cityName":"新北市"},
    {"cityCode":"TPE", "cityName":"台北市"},
    {"cityCode":"TYC", "cityName":"桃園市"}    
  ]
}
