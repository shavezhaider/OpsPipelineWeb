import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {PageNoFoundComponent} from './page-no-found/page-no-found.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AdminLoginComponent } from './authentication/admin-login/admin-login.component';

const routes: Routes = [
 
 
   {  
    path:"admin",
    component:AdminLayoutComponent,            
    loadChildren:()=>import('./admin/admin.module').
    then(mod=>mod.AdminModule)  
    },
    
    {  
      path:"",      
      loadChildren:()=>import('./authentication/authentication.module').
      then(mod=>mod.AuthenticationModule)  
  
      },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
