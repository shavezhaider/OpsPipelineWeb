import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormControl,Validators, FormBuilder, AbstractControl} from '@angular/forms'
import {AuthenticationService} from '../services/authentication.service'

import {NotifierService } from 'angular-notifier'
import { Validation } from 'src/app/utils/validation.model';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']})
export class AdminLoginComponent implements OnInit {
  UserAuthReq:any;
  public loading: boolean;
  loginForm: FormGroup;
  
  constructor(private router : Router,private authService:AuthenticationService,
    private notifier:NotifierService,private formBuilder: FormBuilder
    ) {
      this.UserAuthReq = { UserName: '', Password: '' }
      this.loading=false;

      this.loginForm = this.formBuilder.group(
        {          
          userName: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(10)
            ]
          ] ,
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
         
     });
    }
     
  ngOnInit(): void {
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
 onSubmit()
{
  
  if (this.loginForm.invalid) {
    return;
  }
  this.loading=true;
  this.authService.userlogin(this.loginForm.value).subscribe(data => {
    debugger
    if(data.IsAuthSuccessful){  
      //Token
      this.notifier.notify('success', data.errorMessage);
      localStorage.setItem("token",data.Token);
      this.router.navigate(['admin/dashboard']);
    }
    else {
      this.notifier.notify('info', data.errorMessage);
    }
    this.loading=false;
  },
  error=>{
    
    this.loading=false;
  })
}  

}
