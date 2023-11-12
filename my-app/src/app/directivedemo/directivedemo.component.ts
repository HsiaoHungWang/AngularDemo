import { Component } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent {
  show:boolean = true;

  cities:any = [
    {"cityCode":"KLU", "cityName":"基市"},
    {"cityCode":"TPH", "cityName":"新北市"},
    {"cityCode":"TPE", "cityName":"台北市"},
    {"cityCode":"TYC", "cityName":"桃園市"}
    
  ]
}
