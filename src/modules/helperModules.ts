import { Injector } from "@angular/core";
import { setAppInjector } from "./app-injector";

export class HelperModule{
    constructor(injector: Injector){
        // setAppInjector(injector);
    }
}