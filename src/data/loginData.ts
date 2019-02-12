import { Login } from "src/domain/login/login";
import { FireBaseHelper } from "src/helpers/fireBaseHelper";
import { LoginResponseBody } from "src/domain/login/loginResponseBody";
import { Observable } from "rxjs";
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { throwError } from 'rxjs';

export class LoginData{

    constructor(){
    }
    firebaseHelper = new FireBaseHelper();

    register(login: Login): Observable<LoginResponseBody>{
         return this.firebaseHelper.register(login).
         catch(err =>{
            switch(err.message){
                case "auth/weak-password":
                    return throwError("Senha deve ter no mínimo 6 caracteres")
                case "auth/email-already-in-use":
                    return this.login(login);
                default:
                    return throwError("Erro");
            }
         })
    }

    login(login: Login): Observable<LoginResponseBody>{
        return this.firebaseHelper.login(login)
        .catch(err => {
            if(err.message == "auth/wrong-password"){
                return throwError("Senha inválida")
            }
        });
    }
}