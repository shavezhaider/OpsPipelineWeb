import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { StatusCode } from 'src/app/utils/status-code';

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
  private router : Router,private notifier : NotifierService) {
    this.loading=false;
    //@Output() Emitter = newEventEmitter <any> ();  
    this.form = this.formBuilder.group(
      {
        
        entirePipeline: [
          '',
          [
            Validators.required           
          ]
        ],
        dealLocation: [
          '',
          [
            Validators.required           
          ]
        ],
        dealClosureDate: [
          '',
          [
            Validators.required           
          ]
        ],
        topDeal: [
          '',
         
        ],
        SalesStage: [
          '',
          
        ]
   });
  }


  
  onSubmit(): void {
  {
    if (this.form.invalid) {
      return;
    }
    this.loading=true;
 
    
  }
}
get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}
}

function newEventEmitter<T>(): any {
  throw new Error('Function not implemented.');
}
