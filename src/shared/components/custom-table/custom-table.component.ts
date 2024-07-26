import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { TableDTO } from '../../models/row-table.model';
import { CustomMenuComponent } from '../custom-menu/custom-menu.component';
import { menuButtonDTO } from '../../models/menu-button.model';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [CommonModule, SharedModule, CustomMenuComponent, FilterComponent],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})
export class CustomTableComponent {
  @Input() headers: string[] = [];
  @Input() table: TableDTO[] = [];
  @Input() title: string = '';

  @Input() buttonLabel: string = 'Criar usuário';
  @Input() buttonAction: () => void = () => { };
  @Input() buttonFilter: () => void = () => { };
  @Input() buttonOrder: () => void = () => { };

  @Input() showButtonFilter: boolean = false;
  @Input() showButtonOrder: boolean = false;

  isAscendingOrder = true;

  constructor(
  ) { }

  toggleSort() {
    this.isAscendingOrder = !this.isAscendingOrder;
    this.buttonOrder();
  }

  getConvertedContent(content: any): menuButtonDTO[] {
    if (Array.isArray(content)) {
      return content as menuButtonDTO[];
    } else {
      return [];
    }
  }



}
