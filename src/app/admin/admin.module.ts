import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module'
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHeaderComponent } from './Shared/admin-header/admin-header.component';
import { AdminFooterComponent } from './Shared/admin-footer/admin-footer.component';


import { ReportFiltersComponent } from './report-filters/report-filters.component';
import { DealReportListComponent } from './deal-report-list/deal-report-list.component';
import { TopMenuComponent } from './Shared/top-menu/top-menu.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../authentication/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth-interceptor';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [    
     DashboardComponent, AdminHeaderComponent, AdminFooterComponent,  ReportFiltersComponent, DealReportListComponent, TopMenuComponent, ProfileComponent
  
  ],
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule, 
    AdminRoutingModule,
    
    MDBBootstrapModule.forRoot()
  ],
  exports:[AdminHeaderComponent],
  providers:[AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  
  ]
})
export class AdminModule { }
