import { Component } from '@angular/core';
import {Router,ActivatedRoute, NavigationEnd} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpsPipeline';
  constructor(private route: Router,private actRouter : ActivatedRoute) {
    debugger
    
    var currentUrl=window.location.pathname; 
    if(currentUrl == "/"){
    this.route.navigate(['adminlogin']);
    }
   console.log(decodeURIComponent(this.route.url));
  }
  setHeader() {
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);  
   
  }

}
