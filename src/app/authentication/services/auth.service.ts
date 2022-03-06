import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import {AuthenticationService} from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _isLoggedIn= new BehaviorSubject<boolean>(false);
isLoggedIn=this._isLoggedIn.asObservable();

constructor(private authServices : AuthenticationService) { 
const token= localStorage.getItem("Authtoken");
this._isLoggedIn.next(!!token);
  }
  login(loginForm: any)
  {
   return this.authServices.userlogin(loginForm).pipe(
     tap((response:any) => {
      localStorage.setItem("Authtoken",response.Token);
      this._isLoggedIn.next(true);
     })
   )
  }
}
