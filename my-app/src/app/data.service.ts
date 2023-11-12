import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
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

   getShippers(){
    return this.http.get(this.apiUrl);
   }
  
}
