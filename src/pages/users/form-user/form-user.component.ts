import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OptionSelect } from '../../../shared/models/option-select.model';
import { USER_LEVEL } from './model/user-level.const';
import { CreateUserForm } from './model/create-user.form';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss'
})
export class FormUserComponent {

  userForm!: FormGroup;

  userLevelOption: OptionSelect[] = USER_LEVEL;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.onInitForm(new CreateUserForm());
  }

  onInitForm(data: CreateUserForm) {
    this.userForm = CreateUserForm.buildForm(data);
  }

  onSubmit(): void {
   
  }
}
