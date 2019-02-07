import { Http } from '@angular/http';
import { Observable } from 'rxjs';

export class MockHelper{
    private _baseUrl = 'assets/mocks/';
    private _getOwner = this._baseUrl + 'getOwner.json';   ;
    private _getDogs = this._baseUrl + 'getDogs.json';   ;
    private _login= this._baseUrl + 'login.json';   

    public login(http: Http): Observable<any> {
        return http.get(this._login);
    }

    public getDogs(http: Http): Observable<any> {
        return http.get(this._getDogs);
    }

    public getUser(http: Http, userId: number): Observable<any>{
        return http.get(this._getOwner);
    }
}