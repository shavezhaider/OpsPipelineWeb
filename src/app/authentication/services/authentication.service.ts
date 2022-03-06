import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError } from 'rxjs/operators';

import { apiUrl } from 'src/app/admin/Shared/api-urls';
import { environment } from 'src/environments/environment';
import { UserAuthRequest } from 'src/app/admin/Shared/interface/request/user-authentication-request';
import {NotifierService } from 'angular-notifier'

// @Injectable({
//   providedIn: 'root'
// })


@Injectable()

export class AuthenticationService {
  private APIBaseUrl:string
  constructor(private http:HttpClient, private notifier:NotifierService,
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
    
  //  return this.http.post(this.APIBaseUrl+apiUrl.API_AdminLogin_URL, UserAuthRequest)
  //  .pipe(retry(1),
  //  catchError(catchError(this.handleError)
  //  ));

   //return this.http.post(this.APIBaseUrl+apiUrl.API_AdminLogin_URL, UserAuthRequest);
    return this.http.post(this.APIBaseUrl+apiUrl.API_AdminLogin_URL, UserAuthRequest)
   .pipe(
   catchError(error=> this.handleError(error))
   );
   
  }
  userRegistration(user:any):Observable<any>
  {
    user.Role="SuperAdmin"
    return this.http.post(this.APIBaseUrl+apiUrl.API_User_Registration_URL,{"appUserEntity":user})
    .pipe(
    catchError(error=> this.handleError(error))
    );
  }

  forgotPassword(user:any):Observable<any>
  {    debugger
    return this.http.post(this.APIBaseUrl+apiUrl.API_User_Forgot_Password_URL,user)
    .pipe(
    catchError(error=> this.handleError(error))
    );
  }
  resetPassword(user:any):Observable<any>
  { debugger
    return this.http.post(this.APIBaseUrl+apiUrl.API_User_Reset_Password_URL,user)
    .pipe(
    catchError(error=> this.handleError(error))
    );
  }


  
  // Error handling 
  handleError(error:any) {
    debugger
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.notifier.notify("error",errorMessage);   
    return throwError(errorMessage);
 }
}
