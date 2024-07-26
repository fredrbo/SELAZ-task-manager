import { Component } from '@angular/core';
import { TableDTO } from '../../shared/models/row-table.model';
import { CustomTableComponent } from '../../shared/components/custom-table/custom-table.component';
import { Router } from '@angular/router';
import { ModalConfirmDelete } from '../../shared/models/modal-confirm-delete.model';
import { ModalService } from '../../app/services/utils/modal.service';
import { TaskDTO } from './form-tasks/models/task.model';
import { TaskService } from '../../app/services/api/task/task.service';
import { getTaskStatusText } from './form-tasks/models/status-task.enum';
import { TimeService } from '../../app/services/utils/time/time.service';
import { NotifyService } from '../../app/services/utils/notify/notify.service';
import { FilterTaks } from './form-tasks/models/filter-taks.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CustomTableComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  tableHeaders: string[] = ["Título", "Descrição", "Data de criação", "Data de vencimento", "Status", "Usuário", ""];
  tableContent: TableDTO[] = [];
  filter: FilterTaks = new FilterTaks();

  constructor(
    private router: Router,
    private modalService: ModalService,
    private taskService: TaskService,
    private timeService: TimeService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAllTask().subscribe(res => {
      if (res) {
        this.populateTable(res);
      }
    });
  }

  populateTable(tasks: TaskDTO[]) {
    this.tableContent = tasks.map(task => ({
      row: [
        { type: "txt", content: task.title },
        { type: "txt", content: task.description },
        { type: "txt", content: this.timeService.formatDate(this.timeService.convertTimestampToDate(task.creationDate)) },
        { type: "txt", content: this.timeService.formatDate(this.timeService.convertTimestampToDate(task.expirationDate)) },
        { type: "txt", content: getTaskStatusText(task.status) },
        { type: "txt", content: task.userName },
        {
          type: "menu", content: [
            { text: "Ver Tarefa", class: 'view', action: () => this.view(task), icon: "task" },
            { text: "Editar", class: 'edit', action: () => this.edit(task), icon: "edit" },
            { text: "Deletar", class: 'delete', action: () => this.openModalDelete(task), icon: "delete" },
          ]
        },
      ]
    }));
  }

  create = () => {
    this.modalService.openDialogTaskForm();
  }

  view(task: TaskDTO) {
    this.modalService.openDialogTaskForm(task);
  }

  edit(task: TaskDTO) {
    this.modalService.openDialogTaskForm(task);
  }

  delete(task: TaskDTO) {
    this.taskService.delete(task.idDoc!);
    this.notifyService.openSnack("Tarefa deletada com sucesso");
  }

  openModalDelete(task: TaskDTO) {
    const data: ModalConfirmDelete = {
      descriptions: [`Tem certeza que deseja tarefa?`],
      title: "Deletar Tarefa?"
    }

    const dialogRef = this.modalService.openDialogConfirmDelete(data);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.delete(task);
      }
    })
  }

  openModalFilter = () => {
    const dialogRef = this.modalService.openDialogTaskFilter(this.filter);

    dialogRef.afterClosed().subscribe(res => {
      this.onCloseModalFilter(res);
    });
  }

  onCloseModalFilter(res: FilterTaks) {
    if (res) {
      this.filterTasks(res);
    } else {
      this.filter = new FilterTaks();
      this.getTasks();
    }
  }

  filterTasks(filter: FilterTaks) {
    //Foi criado uma query para cada condição do filtro.
    //Não consegui filtrar tudo usando apenas uma.
    if (filter.status !== undefined && filter.status >= 0 && filter.userId !== "") {
      this.taskService.getTasksByStatusAndUserId(filter.status, filter.userId).subscribe(res => {
        this.populateTable(res);
      });
    } else if (filter.status !== undefined && filter.status >= 0 && filter.userId === "") {
      this.taskService.getTasksByStatus(filter.status).subscribe(res => {
        this.populateTable(res);
      });
    } else if (filter.status && filter.status <= 0 && filter.userId !== "") {
      this.taskService.getTasksByUserId(filter.userId).subscribe(res => {
        this.populateTable(res);
      });
    } else {
      this.getTasks();
    }
  }

}
