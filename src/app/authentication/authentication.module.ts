import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {NotifierModule} from 'angular-notifier'
import { AuthenticationRoutingModule } from './authentication-routing.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthenticationService } from './services/authentication.service';
import {AdminModule} from '../admin/admin.module';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component'

@NgModule({
  declarations: [AdminLoginComponent, ForgotpasswordComponent, UserRegistrationComponent, ResetPasswordComponent],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    HttpClientModule ,
    NotifierModule,
    AdminModule,
    MDBBootstrapModule.forRoot()
  ],
  exports:[AdminLoginComponent,UserRegistrationComponent,ForgotpasswordComponent],
  providers:[AuthenticationService]
  
  
 
})
export class AuthenticationModule { }
