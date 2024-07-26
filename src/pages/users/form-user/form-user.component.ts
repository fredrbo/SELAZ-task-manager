import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormGroup } from '@angular/forms';
import { OptionSelect } from '../../../shared/models/option-select.model';
import { USER_LEVEL } from './model/user-level.const';
import { CreateUserForm } from './model/create-user.form';
import { UsersService } from '../../../app/services/api/users/users.service';
import { UserDTO } from './model/user.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotifyService } from '../../../app/services/utils/notify/notify.service';

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

  constructor(
    private dialogRef: MatDialogRef<FormUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDTO,
    private usersService: UsersService,
    private notifyService: NotifyService
    
  ) { }

  ngOnInit() {
    this.onInitForm(new CreateUserForm());
  }

  onInitForm(data: CreateUserForm) {
    this.userForm = CreateUserForm.buildForm(data);
    if (this.data) {
      this.populateForm(this.data);
    }
  }

  populateForm(user: UserDTO) {
    this.userForm.patchValue({
      name: user.name,
      level: user.level
    });
  }
  
  onSubmit(): void {
    this.saveUser(this.userForm.value);
  }

  saveUser(user: UserDTO) {
    if (this.data) this.editUser(user);
    else this.createUser(this.userForm.value);
  }

  createUser(user: UserDTO) {
    this.usersService.createUser(user);
    this.dialogRef.close(); 
    this.notifyService.openSnack("Usuário criado com sucesso");   
  }
  
  editUser(user: UserDTO) {
    user.idDoc = this.data.idDoc;
    this.usersService.updateUser(user);
    this.dialogRef.close();
    this.notifyService.openSnack("Usuário salvo com sucesso");
  };

}
