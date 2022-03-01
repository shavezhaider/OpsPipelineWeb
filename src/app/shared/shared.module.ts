import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { LoaderComponent } from './loader/loader.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
@NgModule({
  declarations: [    
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
  ],exports:[
    
  ]
})
export class SharedModule { }
