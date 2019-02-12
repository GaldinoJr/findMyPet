import { User } from "../user/user";

export class LoginResponseBody{
     private _user: User;

    get user(): User{
        return this._user;
    }

    set user(user: User){
        this._user = user;
    }
}