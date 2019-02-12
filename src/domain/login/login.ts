import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Login{
    private _name: string
    private _password: string
    
    
    get email(): string{
        this._name = this.formValidator.get('name').value;
        return this._name + "@email.com"
    }

    get password(){
        this._password = this.formValidator.get('password').value;
        return this._password;
    }

    formValidator = new FormGroup({
        // Exemple de validacao com email
        //Validators.compose([
        //  Validators.required,
        //  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        //]))
        name: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
      });
}