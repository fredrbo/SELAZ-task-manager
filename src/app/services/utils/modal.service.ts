import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormUserComponent } from '../../../pages/users/form-user/form-user.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  width: string = '450px';
  maxHeight: string = '90vh';
  isMobile: boolean = window.innerWidth < 600;


  constructor(private dialog: MatDialog) { }

  openDialogUserForm(data: any): MatDialogRef<FormUserComponent> {
    return this.dialog.open(FormUserComponent, {
      width: this.width,
      maxHeight: this.maxHeight,
      data: data,
    });
  }
}
