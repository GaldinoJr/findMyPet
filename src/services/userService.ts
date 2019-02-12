import { Injectable } from "@angular/core";
import { User } from "src/pageModels/user/user";

@Injectable()
export class UserService{
    public user: User

    constructor(){

    }
}