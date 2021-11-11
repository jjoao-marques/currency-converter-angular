
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConverterService } from 'src/app/services/api-converter/api-converter.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public resultConverter = "0"
  public moeda1: any;
  public moeda2: any;
  public value: any;
  public list: any = [];

  constructor(private apiService: ApiConverterService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.apiService.findAllMoedas().subscribe(res => {

      this.list.push(res.ARS);
      this.list.push(res.USD);
      this.list.push(res.BTC);
      this.list.push(res.EUR);
    })
  }

  converter() {
    let c = this.moeda1 * this.value;
    this.resultConverter = c.toFixed(2);
  }

  onSignOut() {
    this.authService.SignOut();
    this.router.navigate([''])
    
  }

}
