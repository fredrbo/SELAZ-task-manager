import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    {
        path: 'users',
        loadComponent: () => import('../pages/users/users.component').then(m => m.UsersComponent)
    },
    {
        path: 'users/form',
        loadComponent: () => import('../pages/users/form-user/form-user.component').then(m => m.FormUserComponent)
    },
    {
        path: 'tasks',
        loadComponent: () => import('../pages/tasks/tasks.component').then(m => m.TasksComponent)
    },
];
