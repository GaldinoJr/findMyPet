import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Login{
    name: string
     password: string
    
    
    getEmail(): string{
        this.name = this.formValidator.get('name').value;
        return this.name + "@email.com"
    }

    getPassword(){
        this.password = this.formValidator.get('password').value;
        return this.password;
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