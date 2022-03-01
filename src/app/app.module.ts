import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http'
import {NotifierModule} from 'angular-notifier'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminModule } from './admin/admin.module';

import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,    
   
    AdminLayoutComponent
    
  ],
  imports: [
    BrowserModule,
    NotifierModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    AuthenticationModule,
    
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
