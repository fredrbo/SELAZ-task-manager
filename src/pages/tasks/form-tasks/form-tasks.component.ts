import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OptionSelect } from '../../../shared/models/option-select.model';
import { USER_LEVEL } from '../../users/form-user/model/user-level.const';
import { CreateTaskForm } from './models/create-task-form.model';
import { TaskDTO } from './models/task.model';
import { TaskService } from '../../../app/services/api/task/task.service';
import { TimeService } from '../../../app/services/utils/time/time.service';
import { TASK_STATUS } from './models/type-status.const';

@Component({
  selector: 'app-form-tasks',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './form-tasks.component.html',
  styleUrl: './form-tasks.component.scss'
})
export class FormTasksComponent {


  taskForm!: FormGroup;
  taskStatusOption: OptionSelect[] = TASK_STATUS;

  constructor(
    private dialogRef: MatDialogRef<FormTasksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDTO,
    private tasksService: TaskService,
    private timeService: TimeService,
  ) { }

  ngOnInit() {
    this.onInitForm(new CreateTaskForm());
  }

  onInitForm(data: CreateTaskForm) {
    this.taskForm = CreateTaskForm.buildForm(data);
    if (this.data) {
      this.populateForm(this.data);
    }
  }

  populateForm(task: TaskDTO) {
    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      expirationDate: this.timeService.convertTimestampToDate(task.expirationDate),
      status: task.status,
      userId: task.userId,
    });
  }


  onSubmit(): void {
    this.saveTask(this.taskForm.value);
  }

  saveTask(task: TaskDTO) {
    if (this.data) this.editTask(task);
    else this.createTask(this.taskForm.value);
  }

  createTask(task: TaskDTO) {
    task.creationDate = this.timeService.convertDateToTimestamp(new Date())
    this.tasksService.createTask(task);
  }

  editTask(task: TaskDTO) {
    task.idDoc = this.data.idDoc;
    this.tasksService.updateTask(task);
  };

}
