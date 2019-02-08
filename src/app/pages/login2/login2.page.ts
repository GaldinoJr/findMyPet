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
import { NameEditorComponent } from 'src/domain/nameEditorComponent';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})

export class Login2Page implements OnInit {
  loginResponse = new LoginResponseBody();
  mockHelper = new MockHelper();
  login = new Login();
  constructor(
    public firebaseauth: AngularFireAuth,
    private statusBar: StatusBar, 
    private nav : NavController, 
    private http: Http, 
    private userService: UserService) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#2E5EAA');
  }
  
  onLoginClicked(){
    this.cadastrarUsuario();
    
  }

  public cadastrarUsuario(): void {        
    
    this.firebaseauth.auth.createUserWithEmailAndPassword(
      this.login.getEmail(), this.login.getPassword() )
    .then(() => {
      // this.exibirToast('Usuário criado com sucesso');
      this.mockHelper.login(this.http).subscribe(data => {
        console.log(data.json())
        this.loginResponse = data.json() as LoginResponseBody
        if(this.loginResponse.user.isRegistered){
          //this.nav.navigateRoot('/home',  {queryParams: {login: this.login}}); 
          this.userService.user = this.loginResponse.user;
          this.nav.navigateRoot('/home',  {}); 
        }
       });
    })
    .catch((erro: any) => {
      this.exibirToast(erro);
    });
  } 

  private exibirToast(mensagem: string): void {
    console.log(mensagem)
  }
}
