import { Injectable } from '@angular/core';
import { TaskDTO } from '../../../../pages/tasks/form-tasks/models/task.model';
import { BaseService } from '../base/base.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseService {

  constructor(
    afs: AngularFirestore,
  ) {
    super(afs, "Tasks");
  }

  getAllTask(): Observable<TaskDTO[]> {
    return this.getAll<TaskDTO>();
  }

  createTask(user: TaskDTO) {
    return this.create(user);
  }

  updateTask(user: TaskDTO) {
    return this.update(user);
  }

}