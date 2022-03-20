import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {


  constructor(private authService: AuthService,private route: Router) {

  }


  ngOnInit(): void {

    if(!this.authService.isLoggedIn){
      this.route.navigate(['adminlogin']);
     }
    
  }

}
