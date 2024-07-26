import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormUserComponent } from '../../../pages/users/form-user/form-user.component';
import { ModalConfirmDelete } from '../../../shared/models/modal-confirm-delete.model';
import { ModalConfirmDeleteComponent } from '../../../shared/components/modal/modal-confirm-delete/modal-confirm-delete.component';
import { UserDTO } from '../../../pages/users/form-user/model/user.model';
import { TaskDTO } from '../../../pages/tasks/form-tasks/models/task.model';
import { FormTasksComponent } from '../../../pages/tasks/form-tasks/form-tasks.component';
import { FilterComponent } from '../../../shared/components/filter/filter.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  width: string = '450px';
  maxHeight: string = '90vh';

  constructor(private dialog: MatDialog) { }

  openDialogUserForm(data?: UserDTO): MatDialogRef<FormUserComponent> {
    return this.dialog.open(FormUserComponent, {
      width: this.width,
      maxHeight: this.maxHeight,
      data: data,
    });
  }

  openDialogTaskForm(data?: TaskDTO): MatDialogRef<FormTasksComponent> {
    return this.dialog.open(FormTasksComponent, {
      width: this.width,
      maxHeight: this.maxHeight,
      data: data,
    });
  }

  openDialogConfirmDelete(data: ModalConfirmDelete): MatDialogRef<ModalConfirmDeleteComponent> {
    return this.dialog.open(ModalConfirmDeleteComponent, {
      width: this.width,
      maxHeight: this.maxHeight,
      data: data
    });
  }

  openDialogTaskFilter(data?: ModalConfirmDelete): MatDialogRef<FilterComponent> {
    return this.dialog.open(FilterComponent, {
      width: this.width,
      maxHeight: this.maxHeight,
      data: data
    });
  }
}
