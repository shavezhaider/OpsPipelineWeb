import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module'
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHeaderComponent } from './Shared/admin-header/admin-header.component';
import { AdminFooterComponent } from './Shared/admin-footer/admin-footer.component';
import { AdminDashboardLayoutComponent } from './Shared/admin-dashboard-layout/admin-dashboard-layout.component';
import {UserAuthRequest} from './Shared/interface/request/user-authentication-request'

@NgModule({
  declarations: [    
     DashboardComponent, AdminHeaderComponent, AdminFooterComponent, AdminDashboardLayoutComponent
  
  ],
  imports: [
    CommonModule,   
    AdminRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  exports:[AdminDashboardLayoutComponent,AdminHeaderComponent]
})
export class AdminModule { }
