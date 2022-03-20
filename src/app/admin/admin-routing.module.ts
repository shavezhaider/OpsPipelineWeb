import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNoFoundComponent } from '../page-no-found/page-no-found.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DealReportListComponent} from './deal-report-list/deal-report-list.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
 
 {path:'dashboard',component:DashboardComponent},
 {path:'deal-report',component:DealReportListComponent},
 {path:'profile',component : ProfileComponent},
 {path:"**",component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
