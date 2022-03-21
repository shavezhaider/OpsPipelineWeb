import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { enumOptionType, StatusCode } from 'src/app/utils/status-code';
import { ReportsService } from '../admin-services/reports.service';

@Component({
  selector: 'app-report-filters',
  templateUrl: './report-filters.component.html',
  styleUrls: ['./report-filters.component.css']
})
export class ReportFiltersComponent  {

loading:boolean;
form:FormGroup;
entirePipelines:any=[];
dealLocations:any=[];
topDeals:any=[];
SalesStages:any=[]

constructor(private formBuilder: FormBuilder,
  private router : Router,private notifier : NotifierService, private reportsService : ReportsService) {
    this.loading=false;
   
    this.form = this.formBuilder.group(
      {
        
        entirePipeline: [0, ],
        dealLocation: [0, ],
        dealClosureDate: [Date.now, ],
        topDeal: [0, ],
        SalesStage: [0, ]
   });
   this.getPipeline();
   this.getDealLocation();
   this.getSalesStages();
   this.getTopDeal();

  }

  @Output() getFilterEvent = new EventEmitter <any> (); 
 
get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}

getPipeline(){
  
let type=enumOptionType.entirePipeline;
this.reportsService.GetDropDownOptions(type).subscribe(data => {
  
  this.entirePipelines=data;
  this.loading=false;
 },
 error=>{   
   this.loading=false;
 })   
 }


getDealLocation(){

  let type=enumOptionType.dealLocation;
  this.reportsService.GetDropDownOptions(type).subscribe(data => {
    
    this.dealLocations=data;
    this.loading=false;
   },
   error=>{
     
     this.loading=false;
   }) 
  
}
getSalesStages(){
  let type=enumOptionType.SalesStage
  this.reportsService.GetDropDownOptions(type).subscribe(data => {    
     this.SalesStages=data;
     this.loading=false;
   },
   error=>{
     
     this.loading=false;
   }) 
 
  
}
getTopDeal(){
  let type= enumOptionType.topDeal
  this.reportsService.GetDropDownOptions(type).subscribe(data => {
    
    this.topDeals=data;
    this.loading=false;
   },
   error=>{     
     this.loading=false;
   }) 
   
}
}

