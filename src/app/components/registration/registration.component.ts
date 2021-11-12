import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email: string = "";
  password: any = "";
  
  passwordValid = new FormControl('',[Validators.minLength(1)]);

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp():void {
    this.authService.SignUp(this.email, this.password)
  }


  errorPasswordValid() {
    if(this.passwordValid.invalid) {
      return 'O campo SENHA é obrigatório!';
      
    } 
      return false;    
  }

}
