import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UsersComponent } from './users.component';
import { UsersService } from '../../app/services/api/users/users.service';
import { ModalService } from '../../app/services/utils/modal.service';
import { NotifyService } from '../../app/services/utils/notify/notify.service';
import { UserDTO } from './form-user/model/user.model';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from '../../app/services/api/base/base.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersService: jasmine.SpyObj<UsersService>;
  let modalService: jasmine.SpyObj<ModalService>;
  let notifyService: jasmine.SpyObj<NotifyService>;

  beforeEach(async () => {
    const usersServiceSpy = jasmine.createSpyObj('UsersService', ['getAllUser', 'delete']);
    const modalServiceSpy = jasmine.createSpyObj('ModalService', ['openDialogUserForm', 'openDialogConfirmDelete']);
    const notifyServiceSpy = jasmine.createSpyObj('NotifyService', ['openSnack']);

    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: UsersService, useValue: usersServiceSpy },
        { provide: ModalService, useValue: modalServiceSpy },
        { provide: NotifyService, useValue: notifyServiceSpy },
        { provide: MatDialogRef, useValue: {} },

      ]
    })
      .compileComponents();

    usersService = TestBed.inject(UsersService) as jasmine.SpyObj<UsersService>;
    modalService = TestBed.inject(ModalService) as jasmine.SpyObj<ModalService>;
    notifyService = TestBed.inject(NotifyService) as jasmine.SpyObj<NotifyService>;

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve popular o conteúdo da tabela ao obter usuários', () => {
    const users: UserDTO[] = [
      { name: 'Jasmine teste', level: 1 },
      { name: 'Jasmine teste', level: 2 }
    ];
    usersService.getAllUser.and.returnValue(of(users));

    component.getUsers();
    fixture.detectChanges();

    expect(component.tableContent.length).toBe(2);
    expect(component.tableContent[0].row[0].content).toBe('Jasmine teste');
  });

  it('deve abrir o modal de formulário de usuário ao criar', () => {
    component.create();
    expect(modalService.openDialogUserForm).toHaveBeenCalled();
  });

  it('deve abrir o modal de formulário de usuário com dados do usuário ao editar', () => {
    const user: UserDTO = { name: 'Jasmine teste', level: 1 };
    component.edit(user);
    expect(modalService.openDialogUserForm).toHaveBeenCalledWith(user);
  });

  it('deve abrir o modal de confirmação ao chamar openModalDelete', () => {
    const user: UserDTO = { name: 'Jasmine teste', level: 1 };
    component.openModalDelete(user);

    const dialogRef = modalService.openDialogConfirmDelete.calls.mostRecent().returnValue;
    dialogRef.afterClosed().subscribe(res => {
      expect(modalService.openDialogConfirmDelete).toHaveBeenCalled();
    });
  });

  it('deve deletar o usuário e mostrar notificação ao chamar deleteUser', () => {
    const user: UserDTO = { name: 'Jasmine teste', level: 1 };
    component.deleteUser(user);
    expect(usersService.delete).toHaveBeenCalledWith('1');
    expect(notifyService.openSnack).toHaveBeenCalledWith('Usuário deletado com sucesso');
  });

});
