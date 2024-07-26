import { Injectable } from '@angular/core';
import { FirestoreTimestamp } from '../../../../shared/models/timestamp-model';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  convertTimestampToDate(timestamp: FirestoreTimestamp): Date {
    const { seconds, nanoseconds } = timestamp;
    return new Date(seconds * 1000 + nanoseconds / 1000000);
  }
  
  convertDateToTimestamp(date: Date): FirestoreTimestamp {
    const seconds = Math.floor(date.getTime() / 1000);
    const nanoseconds = (date.getTime() % 1000) * 1000000;
    return { seconds, nanoseconds };
  }

  // 2024-04-17T21:02:00.000Z -> 2024-04-17
  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }


}
