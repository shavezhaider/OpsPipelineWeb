import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/services/auth.service';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  FirstName:string
  constructor(private authService: AuthService) { 
    this.FirstName='';
  }

  ngOnInit(): void {
    debugger
    if(this.authService.isLoggedIn){
      this.FirstName = this.authService.getUserFname;
     console.warn(this.FirstName);

   
      }
  }

  logout()
  {    
    this.authService.doLogout();

  }
}
