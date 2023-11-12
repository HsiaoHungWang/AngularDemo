import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { IShipper } from '../models/ishipper';

@Component({
  selector: 'app-shipper-mgmt',
  templateUrl: './shipper-mgmt.component.html',
  styleUrls: ['./shipper-mgmt.component.css']
})
export class ShipperMgmtComponent {
constructor(private data:DataService){}
shippers:IShipper[] | null = null;
ngOnInit(){
  this.getShippers();
}

getShippers(){
  this.data.getShippers().subscribe(shippers=>{
    this.shippers = shippers as IShipper[];
    console.log(this.shippers)
  });
}
}
