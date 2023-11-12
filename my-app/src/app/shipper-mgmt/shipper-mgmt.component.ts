import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shipper-mgmt',
  templateUrl: './shipper-mgmt.component.html',
  styleUrls: ['./shipper-mgmt.component.css']
})
export class ShipperMgmtComponent {
constructor(private data:DataService){}
ngOnInit(){
  this.getShippers();
}

getShippers(){
  this.data.getShippers().subscribe(shippers=>console.log(shippers));
}
}
