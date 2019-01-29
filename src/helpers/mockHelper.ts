
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

export class MockHelper{
    private ;
    private _loginURL = 'assets/mocks/login.json';   

    public login(http: Http): Observable<any> {
        return http.get(this._loginURL);
    }
}