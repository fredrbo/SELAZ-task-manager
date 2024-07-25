import { Component } from '@angular/core';
import { CustomTableComponent } from '../../shared/components/custom-table/custom-table.component';
import { TableDTO } from '../../shared/models/RowTableModel';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  imports: [CustomTableComponent]
})
export class UsersComponent {

  tableHeaders: string[] = ["Nome", "Nível", ""];
  tableContent: TableDTO[] = [{
    row: [
      { type: "txt", content: "Fred" },
      { type: "txt", content: "Admin" },
      { type: "menu", content: [
        { text: "Editar", class: 'edit', action: this.edit, icon: "edit" },
        { text: "Tarefas", class: 'view', action: this.edit, icon: "task" },
        { text: "Deletar", class: 'delete', action: this.edit, icon: "delete" },
      ] },
    ]
  },
  ];

  edit() {

  }
}
