import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import {MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import {MatMenuModule} from '@angular/material/menu';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NgOtpInputModule } from 'ng-otp-input';
import { ProfileComponent } from './components/profile/profile.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {MatListModule} from '@angular/material/list'
import {MatDividerModule} from '@angular/material/divider';
import { DateDisplayPipe } from './pipes/date-display.pipe'
import { DatePipe } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    ProfileComponent,
    DateDisplayPipe,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(()=>getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    NgOtpInputModule,
    MatAutocompleteModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
