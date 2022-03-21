import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap } from 'rxjs';
import { ExceptionService } from 'src/app/shared/exception.service';
import {AuthenticationService} from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


constructor(private authServices : AuthenticationService,private exceptionService : ExceptionService,private route: Router) { 

  }
  login(loginForm: any)
  {
   return this.authServices.userlogin(loginForm).pipe(
     tap((response:any) => {
      localStorage.setItem("Authtoken",response.token);
      localStorage.setItem("firstName",response.firstName);
      
      })
   )
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('Authtoken');
    return authToken !== null ? true : false;
  }
  get getUserFname(): any {
    let userData = localStorage.getItem('firstName');
    return userData !== null ? userData : null;
  }
  getToken() {
    return localStorage.getItem('Authtoken');
  }
  doLogout() {
    let removeToken = localStorage.removeItem('Authtoken');
    if (removeToken == null) {
      this.route.navigate(['adminlogin']);
    }
  }
}
