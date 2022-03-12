import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError } from 'rxjs/operators';

import { apiUrl } from 'src/app/admin/Shared/api-urls';
import { environment } from 'src/environments/environment';
import { UserAuthRequest } from 'src/app/admin/Shared/interface/request/user-authentication-request';
import {NotifierService } from 'angular-notifier'
import { ExceptionService } from 'src/app/shared/exception.service';

// @Injectable({
//   providedIn: 'root'
// })


@Injectable()

export class AuthenticationService {
  private APIBaseUrl:string
  constructor(private http:HttpClient, private notifier:NotifierService,
    private exceptionService : ExceptionService
    ) {
    
   this.APIBaseUrl=environment.API_BASE_URL;
   }

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  userlogin(UserAuthRequest:UserAuthRequest):Observable<any> 
  {  
  return this.http.post(this.APIBaseUrl+apiUrl.API_AdminLogin_URL, UserAuthRequest,
    {
      headers: this.getHeaders()       
    }
    
    )
   .pipe(
    catchError(error=> this.exceptionService.handleError(error))
   );
   
  }

  getHeaders(){
    let headerOption = new HttpHeaders ();
    headerOption.append('Content-Type', 'application/json');
    headerOption.append('X-Requested-With', 'XMLHttpRequest');
    return headerOption;
    }
  userRegistration(user:any):Observable<any>
  {
    user.Role="SuperAdmin"
    return this.http.post(this.APIBaseUrl+apiUrl.API_User_Registration_URL,{"appUserEntity":user})
    .pipe(
      catchError(error=> this.exceptionService.handleError(error))
    );
  }

  forgotPassword(user:any):Observable<any>
  {    debugger
    return this.http.post(this.APIBaseUrl+apiUrl.API_User_Forgot_Password_URL,user)
    .pipe(
      catchError(error=> this.exceptionService.handleError(error))
    );
  }
  resetPassword(user:any):Observable<any>
  { debugger
    return this.http.post(this.APIBaseUrl+apiUrl.API_User_Reset_Password_URL,user)
    .pipe(
      catchError(error=> this.exceptionService.handleError(error))
    );
  }


  
  
}
