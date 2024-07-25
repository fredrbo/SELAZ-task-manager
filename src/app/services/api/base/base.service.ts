import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  public url = "";

  constructor(
    private afs: AngularFirestore,
    collectionName: string,
  ) {
    this.url = collectionName;
  }

  getAll<T>(queryFn?: QueryFn): Observable<T[]> {
    return this.afs.collection(this.url, queryFn).snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data: any = action.payload.doc.data();
          const idDoc = action.payload.doc.id;

          return { idDoc, ...data };
        });
      })
    );
  }

  getById<T>(id: string, queryFn?: QueryFn): Observable<T> {
    return this.afs.collection(this.url, queryFn).doc<T>(id).snapshotChanges().pipe(
      map(action => {
        const data: any = action.payload.data();
        const idDoc = action.payload.id;
        return { idDoc, ...data };
      })
    );
  }

  create(data: any) {
    data.id = this.afs.createId();
    return this.afs.collection(this.url).add(data);
  }

  delete(dataId: string) {
    this.afs.doc(`${this.url}/${dataId}`).delete();
  }

  update(data: any) {
    delete data.id;
    this.afs.doc(`${this.url}/${data.idDoc}`).update(data);
  }

}
