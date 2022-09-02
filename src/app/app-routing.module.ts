import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import{canActivate,redirectLoggedInTo,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const redirectToLogin=()=>redirectUnauthorizedTo(['/login']);
const redirectToHome=()=>redirectLoggedInTo(['/home']);
const routes: Routes = [
  {path:'',pathMatch:'full',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent,},
  // {path:'home',component:HomeComponent,},
  // {path:'profile',component:ProfileComponent,},
  // {path:'dashboard',component:DashboardComponent}
    {path:'dashboard',component:DashboardComponent ,// this is the component with the <router-outlet> in the template
    children: [
     { path:'home',component:HomeComponent, outlet: 'db'},
     {path:'profile',component:ProfileComponent, outlet: 'db'},
     { path: '', redirectTo:'home', pathMatch:"full" }
    ]
  },
  { path: 'home', redirectTo:'/dashboard/(db:home)', pathMatch:"full" }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
