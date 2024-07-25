import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

export class CreateUserForm {
    name: string = '';
    levelId: number = 0;

    static buildForm(form: CreateUserForm): FormGroup {
        return new FormGroup({
            name: new FormControl(form.name, [Validators.required, Validators.minLength(4)]),
            levelId: new FormControl(form.levelId, [Validators.required, levelIdValidator() ]),
        });
    }
}

export function levelIdValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      return value > 0 ? null : { 'levelIdInvalid': { value } };
    };
  }