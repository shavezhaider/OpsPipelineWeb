import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  //@ViewChild('sidenav', {static: true}) sidenav: ElementRef;
 // clicked: boolean;

  constructor() {
    //this.clicked = this.clicked === undefined ? false : true;
  }


  ngOnInit(): void {
  }

}
