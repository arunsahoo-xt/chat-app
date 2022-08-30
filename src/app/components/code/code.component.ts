import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
data:any;
otp!: string;
  verify: any;
  constructor(private router: Router, 
    private authService:AuthenticationService,
    private toast:HotToastService,) {
  }
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "",
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  }
  ngOnInit(): void {
    this.data = history.state.userData;
    console.log(this.data);
    this.verify = JSON.parse(localStorage.getItem("verificationId") || '{}');
    
  }
  onOtpChange(otpCode: any) {
    this.otp = otpCode;
    console.log(this.otp);
  }
  handleClick() {
    const{name,phoneNumber,email,password,cpassword}=this.data;
    var credentials = firebase.auth.PhoneAuthProvider
      .credential(this.verify, this.otp);
      firebase.auth().signInWithCredential(credentials).then((res)=>{
// console.log(res);
// localStorage.setItem('user_data',JSON.stringify(res));
// this.router.navigate(['/dashboard'])
this.authService.signup(name!,email!,password!).pipe(
    this.toast.observe({
      success:"Sign Up Success..",
      loading:"Loading...",
      error:(err)=>`${err?.message}`
    })
  ).subscribe(()=>{
    this.router.navigate(['/home'])
  })
      }).catch((error)=>{
        alert(error.message);
      })
  }


}