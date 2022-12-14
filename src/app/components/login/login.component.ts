import { Component, OnInit } from '@angular/core';
import { authState } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  });

  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private toast:HotToastService,
    private activatedRoute:ActivatedRoute,
  
    ) { }

  ngOnInit(): void {
  }
get email(){
  return this.loginForm.get('email');
}
get password(){
  return this.loginForm.get('passwrod');
}
submit(){
  if(!this.loginForm.valid){return}
  else{
    const {email,password}=this.loginForm.value;
this.authService.login(email!,password!).pipe(
  this.toast.observe({
    success:'Logged in successfully',
    loading:'Loading...',
    error:'There was an error'
  })
).subscribe(()=>{
  this.router.navigate(["home"]);
});
  }
}
}
