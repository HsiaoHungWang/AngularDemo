import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IShipper } from './models/ishipper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  message:string = "這是一個服務";
  //http://localhsot/api
  apiUrl:string = `${environment.apiUrl}/shippers`;
  constructor(private http: HttpClient) {
   // console.log(environment.apiUrl);
   }

   getShippers():Observable<IShipper[]>{
    return this.http.get<IShipper[]>(this.apiUrl);
   }
   addShipper(shipper:IShipper):Observable<IShipper>{
    return this.http.post<IShipper>(this.apiUrl, shipper);
   }   
   deleteShipper(shipperId:number):Observable<{}>{
    return this.http.delete(`${this.apiUrl}/${shipperId}`);
   }
   putShipper(shipper:IShipper):Observable<IShipper>{
    return this.http.put<IShipper>(`${this.apiUrl}/${shipper.shipperId}`, shipper);
   }

  
}
