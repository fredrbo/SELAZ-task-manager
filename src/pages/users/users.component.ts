import { Component } from '@angular/core';
import { CustomTableComponent } from '../../shared/components/custom-table/custom-table.component';
import { TableDTO } from '../../shared/models/row-table.model';
import { Router } from '@angular/router';
import { ModalService } from '../../app/services/utils/modal.service';
import { ModalConfirmDelete } from '../../shared/models/modal-confirm-delete.model';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  imports: [CustomTableComponent]
})
export class UsersComponent {

  constructor(
    private router: Router,
    private modalService: ModalService
  ) { }

  tableHeaders: string[] = ["Nome", "Nível", ""];
  tableContent: TableDTO[] = [{
    row: [
      { type: "txt", content: "Fred" },
      { type: "txt", content: "Admin" },
      {
        type: "menu", content: [
          { text: "Ver Tarefas", class: 'view', action: () => this.goToTask(), icon: "task" },
          { text: "Editar", class: 'edit', action: () => this.edit(), icon: "edit" },
          { text: "Deletar", class: 'delete', action: () => this.delete(), icon: "delete" },
        ]
      },
    ]
  },
  ];

  edit() {
    this.modalService.openDialogUserForm("");
  }

  goToTask() {
    this.router.navigateByUrl("tasks");
  }

  delete() {
    const data: ModalConfirmDelete = {
      descriptions: [`Tem certeza que deseja deletar usuário USERNAME`, "<b>IMPORTANTE</b>: Ao deletar usuário será deletado também qualquer tarefa relacionada a ele "],
      title: "Deletar usuário?"
    }

    this.modalService.openDialogConfirmDelete(data);
  }

}
