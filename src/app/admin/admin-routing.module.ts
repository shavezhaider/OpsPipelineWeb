import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNoFoundComponent } from '../page-no-found/page-no-found.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
 
 {path:'dashboard',component:DashboardComponent},
 {path:"**",component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
