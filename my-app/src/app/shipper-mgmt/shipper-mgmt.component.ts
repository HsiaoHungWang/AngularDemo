import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { IShipper } from '../models/ishipper';

@Component({
  selector: 'app-shipper-mgmt',
  templateUrl: './shipper-mgmt.component.html',
  styleUrls: ['./shipper-mgmt.component.css']
})
export class ShipperMgmtComponent {
  constructor(private data: DataService) { }
  shippers: IShipper[] | null = null;
  shipperAddData: IShipper = { "companyName": "abcd", "phone": "(02) 5555-9831" };
  shipperUpdateData: IShipper = {
    "shipperId": 7,
    "companyName": "xyz",
    "phone": "(02) 1111-9831"
  }
  aShipper: IShipper = {
    "shipperId": 0,
    "companyName": "",
    "phone": ""
  }
  ngOnInit() {
    //this.createShipper();
    //this.updateShipper();
    //this.deleteShipper();
    this.getShippers();
  }

  getShippers() {
    this.data.getShippers().subscribe(shippers => {
      this.shippers = shippers;
      console.log(this.shippers)
    });
  }

  createShipper(shipper: IShipper) {
    this.data.addShipper(shipper).subscribe(shipper => this.getShippers());
  }

  updateShipper(shipper: IShipper) {
    this.data.putShipper(shipper).subscribe(shipper => this.getShippers());
  }
  deleteShipper(shipperId: any) {
    if (window.confirm("真的要刪除嗎?")) {
      this.data.deleteShipper(shipperId).subscribe(shipper => { this.getShippers() });
    }

  }
  edit(shipper: IShipper) {
    this.aShipper = shipper;
    console.log(this.aShipper);
  }

  saveData(shipper: IShipper) {
    if (!!shipper.shipperId) {
      console.log("修改");
      this.updateShipper(shipper);

    } else {
      console.log("新增");
      this.createShipper(shipper);
    }
  }

}
