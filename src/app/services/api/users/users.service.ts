import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../../pages/users/form-user/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {

  constructor(
    afs: AngularFirestore,
  ) {
    super(afs, "users");
  }

  getAllUser(): Observable<UserDTO[]> {
    return this.getAll<UserDTO>();
  }

  createUser(user: UserDTO) {
    return this.create(user);
  }

  updateUser(user: UserDTO) {
    return this.update(user);
  }

}