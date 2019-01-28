import { Component, OnInit } from '@angular/core';
import { Login2 } from 'src/domain/login2';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: Login2 = {
      isLoginVisible: true,
      titleCard: "Login"
  }

  constructor() { }

  ngOnInit() {
  }

  changeToLogin(){
    this.login.isLoginVisible = true;
    this.login.titleCard = "Login";
  }

  changeToSignUp(){
    this.login.isLoginVisible = false;
    this.login.titleCard = "Sign Up";
  }
}
