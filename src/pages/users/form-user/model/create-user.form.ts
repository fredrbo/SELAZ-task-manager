import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

export class CreateUserForm {
    name: string = '';
    level: number = 0;

    static buildForm(form: CreateUserForm): FormGroup {
        return new FormGroup({
            name: new FormControl(form.name, [Validators.required, Validators.minLength(4)]),
            level: new FormControl(form.level, [Validators.required, levelIdValidator() ]),
        });
    }
}

export function levelIdValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      return value > 0 ? null : { 'levelIdInvalid': { value } };
    };
  }