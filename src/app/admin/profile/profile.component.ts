import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { Validation } from 'src/app/utils/validation.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  public loading: boolean;
  constructor(private formBuilder: FormBuilder,private authService:AuthenticationService,
    private router : Router,private notifier : NotifierService) {
    this.loading=false;
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        
password:[null, Validators.compose([        
   Validators.required,
   Validators.minLength(6),
   Validators.maxLength(20),

       // 2. check whether the entered password has a number
       Validation.patternValidator(/\d/, { hasNumber: true }),
       // 3. check whether the entered password has upper case letter
       Validation.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
       // 4. check whether the entered password has a lower-case letter
       Validation.patternValidator(/[a-z]/, { hasSmallCase: true }),
      

  
  ])
],


        confirmPassword: ['', Validators.required]
        // acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validator: [Validation.match('password', 'confirmPassword')]
      }

    );
   }
  
  ngOnInit(): void {
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
getUserDetails(){
  this.authService.userRegistration(this.form.value).subscribe(data => {
    
     console.log(data);
     
     this.loading=false;
   },
   error=>{
     
     this.loading=false;
   }) 
  }
  onSubmit(): void {
  {

    if (this.form.invalid) {
      return;
    }
    this.loading=true;
 
  this.authService.userRegistration(this.form.value).subscribe(data => {
   debugger
    console.log(data);
    
    this.loading=false;
  },
  error=>{
    
    this.loading=false;
  })   
  }
}
}