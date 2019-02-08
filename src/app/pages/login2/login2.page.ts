import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Login } from 'src/domain/login/login';
import { NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginResponseBody } from 'src/domain/login/loginResponseBody';
import { MockHelper } from 'src/helpers/mockHelper';
import { Http } from '@angular/http';
import { UserService } from 'src/services/userService';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginData } from 'src/data/loginData';
import { User } from 'src/domain/user/user';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})

export class Login2Page implements OnInit {
  loginData: LoginData;
  login = new Login();
  
  constructor(
    public toastCtrl: ToastController,
    public firebaseauth: AngularFireAuth,
    private statusBar: StatusBar, 
    private nav : NavController, 
    private http: Http, 
    private userService: UserService) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#2E5EAA');
    this.loginData = new LoginData(this.firebaseauth)
  }
  
  onLoginClicked(){
    this.loginData.login(this.login)
    .then(() => {
      //   this.loginResponse = data.json() as LoginResponseBody
        // if(this.loginResponse.user.isRegistered){
          //this.nav.navigateRoot('/home',  {queryParams: {login: this.login}}); 
          let loginResponse = new LoginResponseBody();
          loginResponse.user = new User()
          loginResponse.user.id = 1;
          
          this.userService.user = loginResponse.user;
          this.nav.navigateRoot('/home',  {}); 
        // }
    })
    .catch((erro: any) => {
      this.presentToast(erro.message)
      this.showLog(erro);
    });
    
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
      position: "bottom"
    });
    toast.present();
  }

  private showLog(mensagem: string): void {
    console.log(mensagem)
  }
}

// "auth/email-already-in-use"