import { Component } from '@angular/core';
import {Router,ActivatedRoute, NavigationEnd} from '@angular/router'
import {AuthService} from  './authentication/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpsPipeline';
  constructor(private route: Router,private actRouter : ActivatedRoute , private authService: AuthService) {
    debugger
    
    var currentUrl=window.location.pathname; 
    if(currentUrl == "/" || !authService.isLoggedIn){
      this.route.navigate(['adminlogin']);
     }
    if(authService.isLoggedIn && currentUrl == "/")
    {
      this.route.navigate(['admin/dashboard']);
      
    }
   
   console.log(decodeURIComponent(this.route.url));
  }
  setHeader() {
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);  
   
  }

}
