import { FormControl, Validators } from "@angular/forms";

export class NameEditorComponent {
    name = new FormControl('',Validators.required);
  }