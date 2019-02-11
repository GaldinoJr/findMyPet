import { Login } from "src/domain/login/login";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginResponseBody } from "src/domain/login/loginResponseBody";
import { AppInjector} from '../modules/app-injector';
import { User } from "src/domain/user/user";
import { Observable } from "rxjs";

export class FireBaseHelper{
    public firebaseauth: AngularFireAuth = AppInjector.get(AngularFireAuth);

    login(login: Login): Observable<LoginResponseBody>{
        return Observable.create(observer =>{
            this.firebaseauth.auth.createUserWithEmailAndPassword(
                login.getEmail(), login.getPassword()).then(() => {
                        let loginResponse = new LoginResponseBody();
    
                        loginResponse.user = new User()
                        loginResponse.user.id = 1;
                        observer.next(loginResponse)
                      // }
                  })
                  .catch((erro: any) => {
                    observer.error(new Error(erro.message))
                  });
        });
    }
}