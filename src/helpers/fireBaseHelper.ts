import { LoginModel } from "src/pageModels/login/loginModel";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginResponseBody } from "src/pageModels/login/loginResponseBody";
import { AppInjector} from '../modules/app-injector';
import { User } from "src/pageModels/user/user";
import { Observable } from "rxjs";

export class FireBaseHelper{
    public _firebaseauth: AngularFireAuth = AppInjector.get(AngularFireAuth);

    register(login: LoginModel): Observable<LoginResponseBody>{
        return Observable.create(observer =>{
            this._firebaseauth.auth.createUserWithEmailAndPassword(
                login.email, login.password).then(() => {
                        let loginResponse = new LoginResponseBody();
    
                        loginResponse.user = new User()
                        loginResponse.user.id = 1;
                        observer.next(loginResponse)
                  })
                  .catch((erro: any) => {
                        observer.error(new Error(erro.code))
                  });
        });
    }

    // COMO PEGAR O ERRO NO CATCH
    // switch(erro.code){
    //       case "auth/weak-password":
    //           observer.error(new Error("Senha deve ter no mínimo 6 caracteres"))
    //           break;
    //       case "auth/email-already-in-use":
    //           break;
    //       default:
    //           observer.error(new Error("Erro"))
    //           break; 

    login(login: LoginModel): Observable<LoginResponseBody>{
        return Observable.create(observer =>{ 
                this._firebaseauth.auth.signInWithEmailAndPassword(login.email, login.password).then(() =>{
                let loginResponse = new LoginResponseBody();
        
                loginResponse.user = new User()
                loginResponse.user.id = 1;
                observer.next(loginResponse)
            })
            .catch((erro: any) => {
                observer.error(new Error(erro.code))
            });
        })
     }


}