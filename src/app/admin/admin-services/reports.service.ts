import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiUrl } from '../Shared/api-urls';

@Injectable({
  providedIn: 'root'
})
export class ReportsService  {
  private APIBaseUrl:string
  constructor(private http:HttpClient
    ) {
    
   this.APIBaseUrl=environment.API_BASE_URL;
   }

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  GetDropDownOptions(type:number):Observable<any> 
  {
  
    return this.http.get(this.APIBaseUrl+apiUrl.API_Options_URL+"/"+type)
   .pipe();
   //catchError(error=> this.handleError(error))
   
   
  }
  GetReports(filters:any):Observable<any>
  {    
    return this.http.post(this.APIBaseUrl+apiUrl.API_Reports_URL,{"appUserEntity":filters})
    .pipe();
    
  }  
}
