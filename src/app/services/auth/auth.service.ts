import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  user!: Observable<firebase.User>;
  authError: any;



  constructor(public firebaseAuth: AngularFireAuth, private snack: MatSnackBar, private router: Router) { }

  loginWithEmail(email: string, password:string) {

    let thisService = this;
    thisService.authError = null;

    this.firebaseAuth.signInWithEmailAndPassword(email, password).then( () => {
        
        window.location.replace('/home');
      
    }).catch((error) => {
      this.message("Usuário ou senha incorretos!")
    })
  }

  SignOut() {
    this.firebaseAuth.signOut();
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition:  'top',
      duration: 4000
    })
  }
}
