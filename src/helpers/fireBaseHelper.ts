import { Login } from "src/domain/login/login";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginResponseBody } from "src/domain/login/loginResponseBody";
import { Injector } from "@angular/core";
import {setAppInjector, AppInjector} from '../modules/app-injector';

export class FireBaseHelper{
    loginResponse = new LoginResponseBody();
    public firebaseauth: AngularFireAuth = AppInjector.get(AngularFireAuth);

    login(login: Login): Promise<firebase.auth.UserCredential>{
        return this.firebaseauth.auth.createUserWithEmailAndPassword(
            login.getEmail(), login.getPassword())
    }
}