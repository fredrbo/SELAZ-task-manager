import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { TableDTO } from '../../models/RowTableModel';
import { CustomMenuComponent } from '../custom-menu/custom-menu.component';
import { menuButtonDTO } from '../../models/MenuButtonModel';


@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [CommonModule, SharedModule, CustomMenuComponent],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})
export class CustomTableComponent {
  @Input()
  headers: string[] = [];


  @Input()
  table: TableDTO[] = [];

  @Input() title: string = '';
  @Input() buttonLabel: string = 'Criar usuário';


  getConvertedContent(content: any): menuButtonDTO[] {
    if (Array.isArray(content)) {
      return content as menuButtonDTO[];
    } else {
      return [];
    }
  }

}
