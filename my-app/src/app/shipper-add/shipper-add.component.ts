import { Component, EventEmitter, Input,Output } from '@angular/core';
import { IShipper } from '../models/ishipper';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shipper-add',
  templateUrl: './shipper-add.component.html',
  styleUrls: ['./shipper-add.component.css']
})
export class ShipperAddComponent {
  @Input() shipperData:IShipper | null = null;
  @Output() add = new EventEmitter<IShipper>();
  constructor(private fb:FormBuilder){}
  
  addForm = this.fb.group({
    shipperId:[this.shipperData?.shipperId],
    companyName:[this.shipperData?.companyName],
    phone:[this.shipperData?.phone],
  })

  submit(){
    
  }

}
