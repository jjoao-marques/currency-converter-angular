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


    // Sign up with email/password
    SignUp(email: string, password: string) {
      return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          this.router.navigate(['']);
          this.message('Usuário cadastrado com sucesso!');
          
        }).catch((error) => {
          this.message(error.message)
        })
    }

  loginWithEmail(email: string, password:string) {

    let thisService = this;
    thisService.authError = null;

    this.firebaseAuth.signInWithEmailAndPassword(email, password).then( () => {
        
        window.location.replace('/home');
      
    }).catch((error) => {
      this.message(error.message)
    })
  }

  SignOut() {
    return this.firebaseAuth.signOut().then(() => {
      this.router.navigate(['']);
    })
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition:  'top',
      duration: 4000
    })
  }
}
