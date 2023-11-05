import { Component, Input } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  //  constructor(private route:ActivatedRoute){  
  //  }
  @Input() id='';

   ngOnInit(){
    console.log(this.id);
    // this.route.paramMap.subscribe(data => {
    //   console.log(data.get("id"));
    // })
   }
}
