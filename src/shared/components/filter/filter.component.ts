import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { TASK_STATUS } from '../../../pages/tasks/form-tasks/models/type-status.const';
import { OptionSelect } from '../../models/option-select.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../../app/services/api/users/users.service';
import { FilterTaks } from '../../../pages/tasks/form-tasks/models/filter-taks.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  form!: FormGroup;
  selectedStatus: number = -1;
  selectedUser: string = "";
  taskStatusOption: OptionSelect[] = TASK_STATUS;

  usersOptions: OptionSelect[] = [];

  constructor(
    private dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterTaks,
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUser().subscribe(res => {
      if (res) {
        this.usersOptions = res.map(user => ({
          id: user.idDoc,
          name: user.name          
        }));
      }
    });

  }

  applyFilter() {
    this.close();
  }

  cleanFilter() {
    this.dialogRef.close(true);
  }

  close(): void {
    this.data.status = this.selectedStatus;
    this.data.userId = this.selectedUser;

    this.dialogRef.close(this.data);
  }

}
