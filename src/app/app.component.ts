import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-login';
  constructor(public authService:AuthenticationService,public router:Router){}
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate([''])
    })
  }
}
