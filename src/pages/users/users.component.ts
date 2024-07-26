import { Component } from '@angular/core';
import { CustomTableComponent } from '../../shared/components/custom-table/custom-table.component';
import { TableDTO } from '../../shared/models/row-table.model';
import { Router } from '@angular/router';
import { ModalService } from '../../app/services/utils/modal.service';
import { ModalConfirmDelete } from '../../shared/models/modal-confirm-delete.model';
import { UsersService } from '../../app/services/api/users/users.service';
import { SharedModule } from '../../shared/shared.module';
import { UserDTO } from './form-user/model/user.model';
import { getUserLevelText } from './form-user/model/user-level.enum';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  imports: [CustomTableComponent, SharedModule]
})
export class UsersComponent {

  tableHeaders: string[] = ["Nome", "Nível", ""];
  tableContent: TableDTO[] = [];

  constructor(
    private router: Router,
    private modalService: ModalService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getAllUser().subscribe(res => {
      if (res) {
        this.populateTable(res);
      }
    });
  }

  populateTable(users: UserDTO[]) {
    this.tableContent = users.map(user => ({
      id: user.idDoc!, row: [
        { type: "txt", content: user.name },
        { type: "txt", content: getUserLevelText(user.level) },
        {
          type: "menu",
          content: [
            { text: "Ver Tarefas", class: 'view', action: () => this.goToTask(user), icon: "task" },
            { text: "Editar", class: 'edit', action: () => this.edit(user), icon: "edit" },
            { text: "Deletar", class: 'delete', action: () => this.openModalDelete(user), icon: "delete" }
          ]
        }
      ]
    }));
  }

  create = () => {
    this.modalService.openDialogUserForm();
  }

  edit(user: UserDTO) {
    this.modalService.openDialogUserForm(user);
  }

  goToTask(user: UserDTO) {
    this.router.navigate(["tasks", { id: user.idDoc }]);
  }

  openModalDelete(user: UserDTO) {
    const data: ModalConfirmDelete = {
      descriptions: [`Tem certeza que deseja deletar usuário ${user.name}`,
        "<b>IMPORTANTE</b>: Ao deletar usuário será deletado também qualquer tarefa relacionada a ele "],
      title: "Deletar usuário?"
    }

    const dialogRef = this.modalService.openDialogConfirmDelete(data);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.deleteUser(user);
      }
    })
  }

  deleteUser(user: UserDTO) {
    this.usersService.delete(user.idDoc!);
  }

}
