import { Component, OnInit } from '@angular/core';
import { Login } from 'src/domain/login';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
  login: Login = {
    name: '',
    password: ''
  }
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  constructor(private nav : NavController) { }

  ngOnInit() {
  }

  onLoginClicked(){
    this.nav.navigateRoot('/home',  {queryParams: {login: this.login}});
  }
}
