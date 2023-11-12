import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IShipper } from '../models/ishipper';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shipper-add',
  templateUrl: './shipper-add.component.html',
  styleUrls: ['./shipper-add.component.css']
})
export class ShipperAddComponent {
  @Input() shipperData: IShipper | null = null;
  @Output() add = new EventEmitter<IShipper>();
  constructor(private fb: FormBuilder) { }
  addForm!: FormGroup;
  createForm() {
    this.addForm = this.fb.group({
      shipperId: [this.shipperData?.shipperId],
      companyName: [this.shipperData?.companyName],
      phone: [this.shipperData?.phone],
    })
  }
  // ngOnInit() {
  //   console.log("data：", this.shipperData);
  //   this.createForm();
  // }
  ngOnChanges() {
    // console.log("ngOnChanges：", this.shipperData);
    this.createForm();
  }

  submit() {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      this.add.emit(this.addForm.value as IShipper);
      this.addForm.reset();
    }

  }

}
