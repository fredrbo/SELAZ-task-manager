import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snackBar: MatSnackBar) { }

  openSnack(text: string, buttonClose: string = "Ok", duration: number = 1500) {
    this.snackBar.open(text, buttonClose, { duration: duration })
  }
}
