import { Injectable } from "@angular/core";
import { User } from "src/domain/user/user";

@Injectable()
export class UserService{
    public user: User

    constructor(){

    }
}