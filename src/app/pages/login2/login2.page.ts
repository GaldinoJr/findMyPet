import { Component, OnInit } from '@angular/core';
import { Login } from 'src/domain/login/login';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginResponseBody } from 'src/domain/login/loginResponseBody';
import { MockHelper } from 'src/helpers/mockHelper';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
  loginResponse = new LoginResponseBody()
  mockHelper = new MockHelper();
  form = new FormGroup({
    // Exemple de validacao com email
    //Validators.compose([
    //  Validators.required,
    //  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //]))
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  constructor(private nav : NavController, private http: Http) { }

  ngOnInit() {
  }
  
  onLoginClicked(){
  
    this.mockHelper.login(this.http).subscribe(data => {
      console.log(data.json())
      this.loginResponse = data.json() as LoginResponseBody
      if(this.loginResponse.isRegistered){
        //this.nav.navigateRoot('/home',  {queryParams: {login: this.login}}); 
        this.nav.navigateRoot('/home',  {}); 
      }
     });
  }

}
