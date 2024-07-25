import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalConfirmDelete } from '../../../models/modal-confirm-delete.model';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-modal-confirm-delete',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './modal-confirm-delete.component.html',
  styleUrl: './modal-confirm-delete.component.scss'
})
export class ModalConfirmDeleteComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalConfirmDelete,
  ) { }

  close(isConfirmed: boolean): void {
    this.dialogRef.close(isConfirmed);
  }


}
