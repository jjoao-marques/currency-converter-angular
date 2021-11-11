
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: any = "";
  
  passwordValid = new FormControl('',[Validators.minLength(1)]);

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void  {
    this.authService.loginWithEmail(this.email, this.password)
  }

  errorPasswordValid() {
    if(this.passwordValid.invalid) {
      return 'O campo SENHA é obrigatório!';
      
    } 
      return false;    
  }

}
