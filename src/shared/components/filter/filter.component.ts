import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { TASK_STATUS } from '../../../pages/tasks/form-tasks/models/type-status.const';
import { OptionSelect } from '../../models/option-select.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  form!: FormGroup;
  selectedStatus: number = 0;
  taskStatusOption: OptionSelect[] = TASK_STATUS;

  constructor(
    private dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) { }

  applyFilter() {
    this.close();
  }

  cleanFilter() {
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close(this.data);
  }

}
