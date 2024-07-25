import { Component } from '@angular/core';
import { TableDTO } from '../../shared/models/row-table.model';
import { CustomTableComponent } from '../../shared/components/custom-table/custom-table.component';
import { Router } from '@angular/router';
import { ModalConfirmDelete } from '../../shared/models/modal-confirm-delete.model';
import { ModalService } from '../../app/services/utils/modal.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CustomTableComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  constructor(
    private router: Router,
    private modalService: ModalService
  ) { }

  tableHeaders: string[] = ["Título", "Descrição", "Data de criação", "Data de vencimento", "Status", "Usuário", ""];
  tableContent: TableDTO[] = [{
    row: [
      { type: "txt", content: "Automatizar email" },
      { type: "txt", content: "Ao fim do processo, é preciso enviar email" },
      { type: "txt", content: "24/07/2024" },
      { type: "txt", content: "27/07/2024" },
      { type: "txt", content: "Pendente" },
      { type: "txt", content: "Frederico" },
      {
        type: "menu", content: [
          { text: "Ver Tarefa", class: 'view', action: this.edit, icon: "task" },
          { text: "Editar", class: 'edit', action: () => this.edit(), icon: "edit" },
          { text: "Deletar", class: 'delete', action:  () => this.delete(), icon: "delete" },
        ]
      },
    ]
  },
  ];

  edit() {
  }

  delete() {
    const data: ModalConfirmDelete = {
      descriptions: [`Tem certeza que deseja tarefa?`],
      title: "Deletar Tarefa?"
    }

    this.modalService.openDialogConfirmDelete(data);
  }

}
