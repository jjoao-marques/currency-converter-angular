import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AuthService } from './services/auth/auth.service';

//Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { RegistrationComponent } from './components/registration/registration.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyADcak2ouB2WB1DtTeuEnSifvfuvFBXW9w",
        authDomain: "angular-currencyconverter.firebaseapp.com",
        projectId: "angular-currencyconverter",
        storageBucket: "angular-currencyconverter.appspot.com",
        messagingSenderId: "303510596629",
        appId: "1:303510596629:web:bfefbcb25c9d862fc1b21c"
      }
    ), AngularFireModule,


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
