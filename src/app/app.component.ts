import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-login';
  user$=this.userService.currentUserProfile$;
  constructor(
    public authService:AuthenticationService,
    public router:Router,
    private userService:UsersService){}
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate([''])
    })
  }
}
