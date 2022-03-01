import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { StatusCode } from 'src/app/utils/status-code';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
 loading:boolean;
 form:FormGroup;
constructor(private formBuilder: FormBuilder,private authService:AuthenticationService,
  private router : Router,private notifier : NotifierService) {
    this.loading=false;
    this.form = this.formBuilder.group(
      {
        
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10)
          ]
        ]
   });
  }

  ngOnInit(): void {
  }

  
  onSubmit(): void {
  {
    if (this.form.invalid) {
      return;
    }
    this.loading=true;
 
  this.authService.forgotPassword(this.form.value).subscribe(data => {
   debugger
    console.log(data);
    if(data.processingStatus.statusCode=== StatusCode[StatusCode.Success]){  
          
      this.router.navigate(['adminlogin']);
    }
    else {
      this.notifier.notify('info', data.processingStatus.message);
    }
    this.loading=false;
  },
  error=>{
    
    this.loading=false;
  })   
  }
}
get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}
}