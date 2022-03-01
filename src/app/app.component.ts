import { Component } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpsPipeline';
  constructor(private route: Router) {
    debugger
    console.warn(this.route.url)
    if(this.route.url == "/"){
    this.route.navigate(['adminlogin']);
  }
   console.log(decodeURIComponent(this.route.url));
  }
  setHeader() {
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
  }

}
