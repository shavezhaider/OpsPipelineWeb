import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { StatusCode } from 'src/app/utils/status-code';
import { Validation } from 'src/app/utils/validation.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  public loading: boolean;
  public code : string;
  constructor(private formBuilder: FormBuilder,private authService:AuthenticationService,
    private router : Router,private notifier : NotifierService, private actRouter : ActivatedRoute ) {
    this.loading=false;
    this.code="";
    this.resetForm = this.formBuilder.group(
      {
        email:[''],
        password:[null, Validators.compose([        
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),       
        Validation.patternValidator(/\d/, { hasNumber: true }),       
        Validation.patternValidator(/[A-Z]/, { hasCapitalCase: true }),       
        Validation.patternValidator(/[a-z]/, { hasSmallCase: true }), 
      ])
      ],
        confirmPassword: ['', Validators.required] ,
        token:['']       
      },
      {
        validator: [Validation.match('password', 'confirmPassword')]
      }
    );
   } 


  ngOnInit(): void {
    debugger
    this.resetForm.value.token = this.actRouter.snapshot.params['code'];
    this.resetForm.value.email = this.actRouter.snapshot.params['email'];
  }
  get f(): { [key: string]: AbstractControl } {
    return this.resetForm.controls;
  }
  onSubmit(): void {
  {
    if (this.resetForm.invalid) {
      return;
    }
    debugger
    this.loading=true;
    this.resetForm.value.token = this.actRouter.snapshot.params['code'];
    this.resetForm.value.email = this.actRouter.snapshot.params['email'];
  this.authService.resetPassword(this.resetForm.value).subscribe(data => {
   debugger
    console.log(data);
    if(data.statusCode=== StatusCode[StatusCode.Success]){  
          
      this.router.navigate(['adminlogin']);
    }
    else {
      this.notifier.notify('info', data.message);
    }
    this.loading=false;
  },
  error=>{
    
    this.loading=false;
  })   
  
  }
}
}
