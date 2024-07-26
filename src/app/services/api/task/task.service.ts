import { Injectable } from '@angular/core';
import { TaskDTO } from '../../../../pages/tasks/form-tasks/models/task.model';
import { BaseService } from '../base/base.service';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';
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

  getTasksByStatusAndUserId(status: number, userId: string): Observable<TaskDTO[]> {
    const queryFn: QueryFn = ref => ref
      .where('status', '==', status)
      .where('userId', '==', userId);
    return this.getAll<TaskDTO>(queryFn);
  }
  
  getTasksByStatus(status: number): Observable<TaskDTO[]> {
    const queryFn: QueryFn = ref => ref
    .where('status', '==', status)
    return this.getAll<TaskDTO>(queryFn);
  }

  getTasksByUserId(userId: string): Observable<TaskDTO[]> {
    const queryFn: QueryFn = ref => ref
      .where('userId', '==', userId);
    return this.getAll<TaskDTO>(queryFn);
  }
}