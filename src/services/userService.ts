import { Injectable } from "@angular/core";
import { User } from "src/domain/login/user";

@Injectable()
export class UserService{
    public user: User

    constructor(){

    }
}