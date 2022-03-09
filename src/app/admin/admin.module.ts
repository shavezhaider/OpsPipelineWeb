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

@NgModule({
  declarations: [    
     DashboardComponent, AdminHeaderComponent, AdminFooterComponent,  ReportFiltersComponent, DealReportListComponent, TopMenuComponent
  
  ],
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule, 
    AdminRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  exports:[AdminHeaderComponent]
})
export class AdminModule { }
