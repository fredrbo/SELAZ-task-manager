import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { menuButtonDTO } from '../../models/MenuButtonModel';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-custom-menu',
  standalone: true,
  imports: [ SharedModule],
  templateUrl: './custom-menu.component.html',
  styleUrl: './custom-menu.component.scss'
})
export class CustomMenuComponent {
  @Input()
  buttons: menuButtonDTO[] = [];
}
