import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import{canActivate,redirectLoggedInTo,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { CodeComponent } from './components/code/code.component';
import { ProfileComponent } from './components/profile/profile.component';

const redirectToLogin=()=>redirectUnauthorizedTo(['/login']);
const redirectToHome=()=>redirectLoggedInTo(['/home']);
const routes: Routes = [
  {path:'',pathMatch:'full',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent,},
  {path:'home',component:HomeComponent,},
  {path:'code',component:CodeComponent,},
  {path:'profile',component:ProfileComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
