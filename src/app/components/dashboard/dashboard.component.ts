import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'firebase-login';
  user$=this.userService.currentUserProfile$;
  constructor(
    public authService:AuthenticationService,
    public router:Router,
    private userService:UsersService){}
  
  
    ngOnInit(): void {
    }
    logout(){
      this.authService.logout().subscribe(()=>{
        this.router.navigate([''])
      })
    }


    
 
  }


  