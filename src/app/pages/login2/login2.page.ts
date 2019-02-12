import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { LoginModel } from 'src/pageModels/login/loginModel';
import { NavController, ToastController } from '@ionic/angular';
import { LoginResponseBody } from 'src/pageModels/login/loginResponseBody';
import { UserService } from 'src/services/userService';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginInteractor } from 'src/interactor/loginInteractor';
import { BasePage } from '../basePage';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})

export class Login2Page extends BasePage implements OnInit {
  loginData: LoginInteractor;
  login = new LoginModel();
  
  constructor(
    public toastCtrl: ToastController,
    private statusBar: StatusBar, 
    private nav : NavController, 
    private userService: UserService) {
      super(toastCtrl)
     }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#2E5EAA');
    this.loginData = new LoginInteractor()
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