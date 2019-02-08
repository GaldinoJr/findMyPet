import { Login } from "src/domain/login/login";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginResponseBody } from "src/domain/login/loginResponseBody";

export class FireBaseHelper{
    loginResponse = new LoginResponseBody();

    constructor(public firebaseauth: AngularFireAuth){}

    login(login: Login): Promise<firebase.auth.UserCredential>{
        return this.firebaseauth.auth.createUserWithEmailAndPassword(
            login.getEmail(), login.getPassword())
    }
}