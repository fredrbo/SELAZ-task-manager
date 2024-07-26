import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { TaskStatus } from './status-task.model';

export class CreateTaskForm {
    title: string = '';
    description: string = "";
    creationDate: Date = new Date();
    expirationDate: Date = new Date();
    status: TaskStatus = 0;
    userId: string = "";

    static buildForm(form: CreateTaskForm): FormGroup {
        return new FormGroup({
            title: new FormControl(form.title, [Validators.required, Validators.minLength(4)]),
            description: new FormControl(form.description, [Validators.required]),
            creationDate: new FormControl(form.creationDate, [Validators.required]),
            expirationDate: new FormControl(form.expirationDate, [Validators.required]),
            status: new FormControl(form.status, [Validators.required]),
            userId: new FormControl(form.userId, [Validators.required]),
        });
    }
}
