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
shipperAddData:IShipper = {"companyName":"abcd","phone":"(02) 5555-9831"};
shipperUpdateData:IShipper = {
  "shipperId": 7,
  "companyName": "xyz",
  "phone": "(02) 1111-9831"
}
ngOnInit(){
  //this.createShipper();
  //this.updateShipper();
  this.deleteShipper();
  this.getShippers();
}

getShippers(){
  this.data.getShippers().subscribe(shippers=>{
    this.shippers = shippers;
    console.log(this.shippers)
  });
}

createShipper(){
  this.data.addShipper(this.shipperAddData).subscribe(shipper=>console.log(shipper));
}

updateShipper(){
  this.data.putShipper(this.shipperUpdateData).subscribe(shipper=>console.log(shipper));
}
deleteShipper(){
  this.data.deleteShipper(9).subscribe(shipper=>console.log(shipper));
}

}
