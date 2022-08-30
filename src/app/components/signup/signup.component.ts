import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { UsersService } from 'src/app/services/users.service';
import { switchMap } from 'rxjs';

var config = {
  projectId: 'fir-login-ed498',
    appId: '1:179359492214:web:9a3346f450f84aab3a1757',
    storageBucket: 'fir-login-ed498.appspot.com',
    apiKey: 'AIzaSyBsDigqha-sdWjLSDDPJ1RJP4OdqXuGn0M',
    authDomain: 'fir-login-ed498.firebaseapp.com',
    messagingSenderId: '179359492214',
}

export function passwordMatchValidator():ValidatorFn{
  return (control : AbstractControl): ValidationErrors | null =>{
const password=control.get('password')?.value;
const cpassword=control.get('cpassword')?.value;
if(password&& cpassword && password!=cpassword){
return {
  passwordsDontMatch:true
}
}
else{
  return null;
}
  }}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  reCaptchaVerifier: any;
  phnNumber: any;

  signupForm=new FormGroup({
    name:new FormControl('',Validators.required),
    phoneNumber:new FormControl('+91',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    cpassword:new FormControl('',Validators.required),
  },{
    validators:passwordMatchValidator()
  });
  constructor(
    private authService:AuthenticationService,
    private toast:HotToastService,
    private router:Router,
    private userService:UsersService
  ) { }

  ngOnInit(): void {
    firebase.initializeApp(config);
  }
  
  get name(){
    return this.signupForm.get('name');
  }
  get phoneNumber(){
    return this.signupForm.get('phoneNumber');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('passwrod');
  }
  get cpassword(){
    return this.signupForm.get('cpasswrod');
  }
  submit(){
    if(!this.signupForm.valid){
      return;
    }
    else{
      const{name,phoneNumber,email,password,cpassword}=this.signupForm.value;
    
        // console.log(res);
        // localStorage.setItem('user_data',JSON.stringify(res));
        // this.router.navigate(['/dashboard'])
        this.authService.signup(email as string,password!).pipe(
     switchMap(({user:{uid}})=>this.userService.addUser({uid , email:email!, displayName:name! })),
            this.toast.observe({
              success:"Sign Up Success..",
              loading:"Loading...",
              error:(err)=>`${err?.message}`
            })
          ).subscribe(()=>{
            this.router.navigate(['/home'])
          })
          


// this.authService.signup(name!,email!,password!).pipe(
//   this.toast.observe({
//     success:"Sign Up Success..",
//     loading:"Loading...",
//     error:(err)=>`${err?.message}`
//   })
// ).subscribe(()=>{
//   this.router.navigate(['/home'])
// })
    }
  }
}
