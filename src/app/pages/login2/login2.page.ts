import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Login } from 'src/domain/login/login';
import { NavController, ToastController } from '@ionic/angular';
import { LoginResponseBody } from 'src/domain/login/loginResponseBody';
import { UserService } from 'src/services/userService';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginData } from 'src/data/loginData';
import { BasePage } from '../basePage';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})

export class Login2Page extends BasePage implements OnInit {
  loginData: LoginData;
  login = new Login();
  
  constructor(
    public toastCtrl: ToastController,
    private statusBar: StatusBar, 
    private nav : NavController, 
    private userService: UserService) {
      super(toastCtrl)
     }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#2E5EAA');
    this.loginData = new LoginData()
  }
  
  onLoginClicked(){
    this.loginData.register(this.login)
    .subscribe(res =>{
      let loginResponse = res as LoginResponseBody
      this.userService.user = loginResponse.user;
      this.nav.navigateRoot('/home',  {}); 
    },
    err =>{
      this.presentToast(err);
      this.showLog(err);
    })
  }
}