import { Login } from "src/domain/login/login";
import { FireBaseHelper } from "src/helpers/fireBaseHelper";
import { LoginResponseBody } from "src/domain/login/loginResponseBody";
import { Observable } from "rxjs";

export class LoginData{

    constructor(){
        
    }
    firebaseHelper = new FireBaseHelper();

    login(login: Login): Observable<LoginResponseBody>{
        return this.firebaseHelper.login(login)
    }
}