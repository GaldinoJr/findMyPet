import { Login } from "src/domain/login/login";
import { FireBaseHelper } from "src/helpers/fireBaseHelper";
import { AngularFireAuth } from "angularfire2/auth";

export class LoginData{

    constructor(public firebaseauth: AngularFireAuth,
        ){
        
    }
    firebaseHelper = new FireBaseHelper(this.firebaseauth);

    login(login: Login): Promise<firebase.auth.UserCredential>{
        return this.firebaseHelper.login(login)
    }
}